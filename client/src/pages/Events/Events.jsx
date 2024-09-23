// src/components/Events.js
import React from 'react';
import EventCard from '../../components/Event/EventCard';

const newsData = [
    {
        image: "https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=",
        date: { day: '25', month: 'May' },
        title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
        link: "#"
    },
    {
        image: "https://media.gettyimages.com/photos/ashraf-ghani-afghanistans-president-speaks-at-the-council-on-foreign-picture-id850794338?k=6&m=850794338&s=612x612&w=0&h=b_XBw5S38Cioslqr6VL3e36cWQU205IsInqDXZpDOD4=",
        date: { day: '10', month: 'Mar' },
        title: "Afghanistan's President Ashraf Ghani Speaks At The Council",
        link: "#"
    },
    {
        image: "https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-arrives-to-the-welcoming-ceremony-the-picture-id694155252?k=6&m=694155252&s=612x612&w=0&h=IIJPetzJL-hAgPkE4hm2wUKvO4YOav8jJp484CgLEUs=",
        date: { day: '20', month: 'Jan' },
        title: "Middle East Participants Gather In Warsaw",
        link: "#"
    },
    {
        image: "https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-speaks-during-a-gathering-in-jalalabad-picture-id1205021905?k=6&m=1205021905&s=612x612&w=0&h=nwAH1XuZxF_H4f6LfHv-lgqtZe0h1tVFXfzhpMwFqao=",
        date: { day: '25', month: 'May' },
        title: "Afghan President Ashraf Ghani Visits Jalalabad",
        link: "#"
    }
];

const Events = () => (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
            {newsData.map((news, index) => (
                <NewsCard
                    key={index}
                    image={news.image}
                    date={news.date}
                    title={news.title}
                    link={news.link}
                />
            ))}
        </div>
    </div>
);

export default Events;
