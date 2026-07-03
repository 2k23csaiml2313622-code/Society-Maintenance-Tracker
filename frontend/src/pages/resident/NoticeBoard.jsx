import { useEffect, useState } from "react";
import { getNotices } from "../../services/noticeService";

const NoticeBoard = () => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNotices();
    }, []);

    const fetchNotices = async () => {
        try {
            const data = await getNotices();
            setNotices(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h2 className="text-xl">Loading...</h2>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Notice Board
            </h1>

            {notices.length === 0 ? (
                <p>No notices available.</p>
            ) : (
                <div className="space-y-4">
                    {notices.map((notice) => (
                        <div
                            key={notice._id}
                            className="bg-white shadow rounded-lg p-5"
                        >
                            <h2 className="text-xl font-bold">
                                {notice.title}
                            </h2>

                            <p className="mt-2">
                                {notice.description}
                            </p>

                            <p className="text-gray-500 text-sm mt-3">
                                {new Date(
                                    notice.createdAt
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NoticeBoard;