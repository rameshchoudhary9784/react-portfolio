import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quis exercitationem consequatur labore corporis eos porro delectus voluptatum molestias consequuntur itaque quas corrupti fugiat impedit obcaecati, placeat iusto nesciunt blanditiis.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quis exercitationem consequatur labore corporis eos porro delectus voluptatum molestias consequuntur itaque quas corrupti fugiat impedit obcaecati, placeat iusto nesciunt blanditiis.'
  },
  {
    avatar: AVTR3,
    name: 'John Doe',
    review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quis exercitationem consequatur labore corporis eos porro delectus voluptatum molestias consequuntur itaque quas corrupti fugiat impedit obcaecati, placeat iusto nesciunt blanditiis.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quis exercitationem consequatur labore corporis eos porro delectus voluptatum molestias consequuntur itaque quas corrupti fugiat impedit obcaecati, placeat iusto nesciunt blanditiis.'
  }
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What Our Client Says</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials-container" modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client-avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client-name'>{name}</h5>
                  <small className='client-review'>
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
