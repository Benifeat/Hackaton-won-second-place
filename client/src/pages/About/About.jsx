import { Typography } from '@mui/material';
import Beni from '../../assets/Beni.jpg';
import Elen from '../../assets/Elen.png';
import Adi from '../../assets/Adi.jpg';

function About() {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <Typography variant="h2" className="mb-4 text-4xl font-bold text-center">About Us</Typography>
            <Typography variant="body1" className="mb-6 text-lg text-gray-700">
                At EzratHaver, we are committed to making the world a better place by supporting those in need through our charity initiatives. Our mission is to gather donations for essential needs such as food, clothing, medical supplies, and other critical support. We believe in the power of community and work tirelessly to ensure that help reaches those who need it the most.
            </Typography>
            <Typography variant="body1" className="mb-6 text-lg text-gray-700">
                What sets us apart is not just our charity work, but also the way we make it easy for others to join our cause. Through our platform, EzratHaver, we provide a space for people to learn, share, and grow. Our community of specialists and the stories shared by individuals inspire others to take action and contribute to the greater good. Whether you're looking to donate, volunteer, or simply learn more, EzratHaver offers a welcoming and accessible environment for everyone.
            </Typography>
            <Typography variant="body1" className="mb-6 text-lg text-gray-700">
                We believe that together, we can create a ripple effect of positive change. Join us on our journey to inspire, support, and uplift those in need.
            </Typography>

            <div className="mt-12">
                <Typography variant="h3" className="text-3xl font-semibold mb-6 text-center">Our Founders</Typography>
                <div className="flex justify-around">
                    <div className="text-center">
                        <a href="https://www.linkedin.com/in/adi-elisha-7443a6313" target="_blank" rel="noopener noreferrer">
                            <img src={Adi} alt="Co-founder Adi Elisha" className="w-64 h-80 rounded-md mx-6 mb-4 transition-transform transform hover:scale-105"/>
                        </a>
                        <Typography variant="h6" className="font-medium">Co-founder</Typography>
                        <Typography variant="body2" className="text-gray-600">Adi Elisha</Typography>
                    </div>
                    <div className="text-center">
                        <a href="https://www.linkedin.com/in/binyamin-visotski" target="_blank" rel="noopener noreferrer">
                            <img src={Beni} alt="Co-founder Binyamin Visotski" className="w-64 h-80 rounded-md mx-6 mb-4 transition-transform transform hover:scale-105"/>
                        </a>
                        <Typography variant="h6" className="font-medium">Co-founder</Typography>
                        <Typography variant="body2" className="text-gray-600">Binyamin Visotski</Typography>
                    </div>
                    <div className="text-center">
                        <a href="https://www.linkedin.com/in/elen-lesovoy" target="_blank" rel="noopener noreferrer">
                            <img src={Elen} alt="Co-founder Elen Lesovoy" className="w-64 h-80 rounded-md mx-6 mb-4 transition-transform transform hover:scale-105"/>
                        </a>
                        <Typography variant="h6" className="font-medium">Co-founder</Typography>
                        <Typography variant="body2" className="text-gray-600">Elen Lesovoy</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;