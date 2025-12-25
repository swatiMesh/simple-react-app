import Title from './Title';
import { tours } from '../json/data';
import Tour1 from './Tour-1'

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return <Tour1 {...tour} key={tour.id} />
        })}
      </div>
    </section>
  )
}
export default Tours