import { Splide,SplideSlide } from "@splidejs/react-splide";
type Props={

}
const Collection : React.FC<Props> =()=>{
    const colectionList =[
        '/images/home-page/collection/collection1.png',
    '/images/home-page/collection/collection2.png',
    '/images/home-page/collection/collection3.png',
    '/images/home-page/collection/collection4.png',
    '/images/home-page/collection/collection5.png',
    '/images/home-page/collection/collection6.png',
    '/images/home-page/collection/collection7.png'
    ]
    const slideOption ={

    type: 'loop',
    autoplay: true,
    interval: 5000,
    flickPower: 50,
    flickMaxPages: 1,
    gap: '40px',
    perPage: 3,
    perMove: 1,
    pagination: true,
    breakpoints: {
      1400: {
        gap: '30px',
      },
      1300: {
        gap: '20px',
      },
      992: {
        perPage: 2,
      },
      576: {
        perPage: 1,
      },
    }
    
}
return(
    <section id="collection" className="section bg-light">
        <div className="container">
            <h2 className="text-9 fw-600 text-center">Collection</h2>
            <hr className="heading-separator-line bg0primary opacity-10 mx-auto"/>
            <p className="lead text-center mb-4">You can see our icon</p>
            <div className="p-3">
                <Splide aria-labelledby="Colletion slide" options={slideOption}>
                    {colectionList.map((scrImg:string, idx: number)=>(
                        <SplideSlide key = {idx}>
                            <div>
                                <img style={{width: '100%'}}src = {scrImg}alt = "app collection"/>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    </section>
)
}

export default Collection