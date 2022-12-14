import Image from '../../../components/Image'
import StoreImage from '../../../components/Image/StoreImage'
import { APP_STORE, GOOGLE_PLAY } from '../../../utils/constants'
type Props = {
};
const About: React.FC<Props> = () => {
    return (
        <section id='about' className='section'>
            <div className='container pt-5'>
                <h2 className='text-9 fw-600 text-center' />
                <hr className='heading-separator-line bg-primary opacity-10 mx-auto'></hr>
                <p className='lead text-center mb-4'>You can present your app, It is all very easy</p>
                <div className='row'>
                    <div className='col-lg-6 text-center'>
                        <Image className="img-fluid" src="/images/home-page/aboutapp.png" alt="about app" width={600} height={472} />
                    </div>
                    <div className='col-lg-6 text-center text-lg-start'>
                        <h2 className='text-6 mb-3 mt-4'>Insprite Design for App Landing</h2>
                        <p>
                            Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                            simply dummy text of the printing and typesetting industry quidam interesset his et.
                        </p>
                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                            simply dummy text of the printing and typesetting industry quidam interesset his et.</p>
                        <div className='d-inline-flex flex-wrap gap 4 justify-content-center pt-2'>
                            <StoreImage store={APP_STORE} />
                            <StoreImage store={GOOGLE_PLAY} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;