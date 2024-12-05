import { Bell, X } from 'lucide-react';
import { useState } from 'react';

const Notice = () => {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: 'System Maintenance',
      content: 'Scheduled maintenance on February 25th, 2024',
      type: 'warning'
    },
    {
      id: 2,
      title: 'New Feature Release',
      content: 'Check out our latest features in the new update',
      type: 'info'
    },
    {
      id: 3,
      title: 'Holiday Schedule',
      content: 'Office will be closed during the upcoming holidays',
      type: 'important'
    }
  ]);

  const getNoticeStyles = (type) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 border-yellow-400 text-yellow-700';
      case 'info':
        return 'bg-blue-50 border-blue-400 text-blue-700';
      case 'important':
        return 'bg-red-50 border-red-400 text-red-700';
      default:
        return 'bg-gray-50 border-gray-400 text-gray-700';
    }
  };

  const removeNotice = (id) => {
    setNotices(notices.filter(notice => notice.id !== id));
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <Bell className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold">Important Notices</h2>
        </div>
        <div className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`relative border-l-4 p-4 rounded-r-lg ${getNoticeStyles(notice.type)}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{notice.title}</h3>
                  <p className="mt-1">{notice.content}</p>
                </div>
                <button
                  onClick={() => removeNotice(notice.id)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Dismiss notice"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notice;