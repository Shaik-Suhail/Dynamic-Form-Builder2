import React, { useEffect, useState } from 'react';

interface Submission {
  id: string;
  data: Record<string, any>;
}

interface FormListProps {
  formName: string; // Form name to fetch submissions for
}

const FormList: React.FC<FormListProps> = ({ formName }) => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulate fetching submissions (replace with actual API call)
  useEffect(() => {
    const fetchSubmissions = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Replace this with an actual API call if using a backend
        const storedSubmissions = localStorage.getItem(`submissions_${formName}`);
        const parsedSubmissions = storedSubmissions ? JSON.parse(storedSubmissions) : [];
        setSubmissions(parsedSubmissions);
      } catch (err) {
        setError('Failed to fetch submissions. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubmissions();
  }, [formName]);

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading submissions...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (submissions.length === 0) {
    return <p className="text-center text-gray-500">No submissions found for this form.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Submissions for {formName}</h1>
      <div className="space-y-4">
        {submissions.map((submission, index) => (
          <div key={submission.id} className="border p-4 rounded-lg shadow">
            <h2 className="font-semibold">Submission {index + 1}</h2>
            <ul className="mt-2">
              {Object.entries(submission.data).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="font-bold">{key}:</span>
                  <span>{String(value)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormList;
