// Basin.com API service for form submissions

class BasinService {
  constructor() {
    this.formId = 'f12926929ae0';
    this.apiToken = import.meta.env.VITE_BASIN_API_KEY;
    this.baseUrl = 'https://usebasin.com/api/v1';
  }

  // Fetch all submissions
  async getSubmissions(page = 1) {
    try {
      // Log for debugging
      console.log('API Token:', this.apiToken ? 'Present' : 'Missing');
      console.log('Form ID:', this.formId);

      const apiUrl = `${this.baseUrl}/submissions?filter_by=All&form_id=${this.formId}&page=${page}&query=&api_token=${this.apiToken}`;

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'User-Agent': 'FreelancerCodex/1.0',
        },
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(
          `HTTP error! status: ${response.status} - ${response.statusText} - ${errorText}`,
        );
      }

      const data = await response.json();
      console.log('API Response data:', data);
      return data.submissions || [];
    } catch (error) {
      console.error('Error fetching submissions:', error);

      // Return mock data if API fails in production
      if (import.meta.env.PROD) {
        console.warn('API failed in production, returning mock data');
        return [
          {
            id: 'demo-1',
            created_at: new Date().toISOString(),
            payload_params: {
              name: 'Demo User',
              email: 'demo@example.com',
              company: 'Demo Company',
              project: 'Demo Project',
              budget: '$5,000 - $10,000',
              message: 'This is a demo submission. API connection failed.',
            },
          },
        ];
      }

      throw new Error(`Failed to fetch submissions: ${error.message}`);
    }
  }

  // Delete a submission
  async deleteSubmission(submissionId) {
    try {
      const response = await fetch(
        `${this.baseUrl}/submissions/${submissionId}?api_token=${this.apiToken}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error('Failed to delete submission');
      }

      return true;
    } catch (error) {
      console.error('Error deleting submission:', error);
      throw new Error(`Error deleting submission: ${error.message}`);
    }
  }

  // Helper function to extract field value from submission
  getFieldValue(submission, fieldName) {
    return (
      submission.payload_params?.[fieldName] ||
      submission.fields?.[fieldName] ||
      submission[fieldName] ||
      ''
    );
  }

  // Filter submissions based on search query
  filterSubmissions(submissions, searchQuery) {
    if (!searchQuery.trim()) {
      return submissions;
    }

    return submissions.filter(submission => {
      const searchFields = [
        this.getFieldValue(submission, 'name'),
        this.getFieldValue(submission, 'email'),
        this.getFieldValue(submission, 'company'),
        this.getFieldValue(submission, 'project'),
        this.getFieldValue(submission, 'message'),
      ];

      return searchFields.some(field =>
        field.toString().toLowerCase().includes(searchQuery.toLowerCase()),
      );
    });
  }

  // Format submission data for email
  formatSubmissionForEmail(submission) {
    const name = this.getFieldValue(submission, 'name');
    const email = this.getFieldValue(submission, 'email');
    const company = this.getFieldValue(submission, 'company');
    const project = this.getFieldValue(submission, 'project');
    const budget = this.getFieldValue(submission, 'budget');
    const message = this.getFieldValue(submission, 'message');

    return {
      subject: 'Re: Your Project Inquiry',
      body: `Hi ${name},%0D%0A%0D%0AThank you for your inquiry.%0D%0A%0D%0ABest regards,%0D%0AFreelancer Codex Team`,
      to: email,
    };
  }

  // Format submission data for copying
  formatSubmissionForCopy(submission) {
    const name = this.getFieldValue(submission, 'name');
    const email = this.getFieldValue(submission, 'email');
    const company = this.getFieldValue(submission, 'company');
    const project = this.getFieldValue(submission, 'project');
    const budget = this.getFieldValue(submission, 'budget');
    const message = this.getFieldValue(submission, 'message');
    const date = this.formatDate(submission.created_at);

    return `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nProject: ${project}\nBudget: ${budget}\nMessage: ${message}\nDate: ${date}`;
  }

  // Format date
  formatDate(dateString) {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'Invalid date';
    }
  }
}

// Create and export a singleton instance
const basinService = new BasinService();
export default basinService;
