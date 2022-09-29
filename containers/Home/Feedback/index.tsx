import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
type Props ={

}
const Feedback : React.FC<Props>= ()=>{

const feedbackList = [
    {
        name : 'OhiaLace',
        rating : 'Amazing App',
        avatarImg: '/images/home-page/avatar/client-sm-1.jpg',
        content: '"I’ve always wondered if there was a way to turn the images I’ve captured over the years into a work of art. I appreciate painters and what they truly create from their minds but I must say to be able to create and turn something that’s valuable to me in a split second is worth looking into."'

    },
    {
        name : 'The Gurdyman',
        rating : 'Awesome app ',
        avatarImg: '/images/home-page/avatar/client-sm-2.jpg',
        content: '"I love this app! I have been able to send all of the NFTs I have purchased here to my MetaMask wallet except one. I highly recommend this app and, if you have any trouble or if you don’t understand something contact customer service, they respond quickly and are super helpful!"'

    },
    {
        name : 'KATI4007',
        rating : 'Fun',
        avatarImg: '/images/home-page/avatar/client-sm-3.jpg',
        content: '"Fun app to use and some very nice effects. I do not like the coin system especially, but I can see where it is useful to be able to purchase only the effects one likes and not be paying more for a complete set. Maybe there could be an option to purchase all or just what one wants. One problem I have is I bought some effects before I set up an account."'

    },

];
    const slideOption ={
        type : 'loop',
        flickPower : 50,
        flickMaxPage : 1,
        gap: '40px',
        perPage: 2,
        pagination: true,
        breakpoints : {
            1400: { gap : '30px'},
            1300: { gap : '20px'},
            768: { perPage : 1 },
        }
    };
    return(


        <section id="testimonial" className="section">
            <div className="container">
                <h2 className="text-9 fw0600 text-center">What our Users Say's</h2>
                <hr className="heading-separator-line bg primary opacity-10 mx-auto"/>
                <p className="lead text-center mb-4">
                    See wjhat our happy Customer say about app. We are proud to have our users.</p> 
            <div className="p-3">
                <Splide aria-aria-labelledby="Screenshot slide" 
                options={slideOption}>
                {feedbackList.map((feedback,idx: number)=>(
                    <SplideSlide key = {idx}>
                        <div>
                            <div className="='item testimonial boder roundes  text-center p-4">
                                <span className="text-9 text-muted opacity-2"></span>
                                <p>{feedback.content}</p>
                                <img className="img-fluid d-inline-block w-auto rounded-circle shadow-sm border"
                                src={feedback.avatarImg} alt= ""/>
                                <strong className="d-block fw-500">{feedback.name}</strong>
                                <span className="text-muted text-2">User Rating {feedback.rating}</span>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
                </Splide>
            </div>
                
            </div>
        </section>
    )


}
export default Feedback