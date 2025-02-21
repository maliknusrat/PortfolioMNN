import img1 from "../../assets/InsightNex.png"
import img2 from "../../assets/ScribbleX.png"
import img3 from "../../assets/Foodies.png"
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div>
            <h2 className="text-center font-extrabold mb-14
                    text-3xl md:text-5xl text-transparent 
                    bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 my-20">Projects</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 ">
                <div className="card glass">
                    <figure><img src={img1} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">InsightNex</h2>
                        <p className="text-justify">This Website is about asserts management system. There are two section Employee and Admin. Admin have all the access to add or remove employee, add asserts, have right to accept or reject the assets request and custom assets request. The employee can request an asset or a custom request.</p>
                        <div className="card-actions flex items-center justify-between ">
                            <Link to='https://github.com/maliknusrat/InsightNex-client'  className="btn btn-neutral">Github link</Link>
                            <Link to='https://insightnex-8a9bd.web.app/' className="btn btn-neutral">Live link</Link>
                        </div>
                    </div>
                </div>

                <div className="card glass">
                    <figure><img src={img2} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">ScribbleX</h2>
                        <p className="text-justify">This Website is about Blog Posting.First User have to authenticate theis profile.Authenticate user can add their blogs and Select the prefarable category,Update their own blog post, can add blog post to their wishlist section and can delete post from their own wishlist.</p>
                        <div className="card-actions flex items-center justify-between ">
                            <Link to='https://github.com/maliknusrat/ScribbleX-client'  className="btn btn-neutral">Github link</Link>
                            <Link to='https://scribblex-2b479.web.app/' className="btn btn-neutral">Live link</Link>
                        </div>
                    </div>
                </div>

                <div className="card  glass">
                    <figure><img src={img3} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Foodies</h2>
                        <p>This Website is all about Food Items. Here You can find different brands, and can order this food items using this website.</p>
                        <div className="card-actions flex items-center justify-between ">
                            <Link to='https://github.com/maliknusrat/brand-shop-server'  className="btn btn-neutral">Github link</Link>
                            <Link to='https://phenomenal-clafoutis-d11035.netlify.app/' className="btn btn-neutral">Live link</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;