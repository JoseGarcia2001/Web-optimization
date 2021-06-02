import h from 'hyperscript'
import moment from 'moment'

const relativeDate = dateStr => moment(dateStr, 'YYYY-MM-DD').fromNow()

const Controls = ({ slug, youtubeVideoId }) =>
  h(
    'div.carousel-item_media',
    h(
      'a.media-play',
      {
        href: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
        title: 'Watch trailer',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img.media-image', {
        src: 'assets/play-icon.png',
        alt: 'Play',
      })
    ),
    h(
      'a.media-play',
      {
        href: `https://kitsu.io/explore/anime/${slug}`,
        title: 'See more',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img.media-image', {
        src: 'assets/plus-icon.png',
        alt: 'More info',
      })
    )
  )

const CarouselItem = ({
  imageUrl,
  title,
  subtitle,
  slug,
  youtubeVideoId,
  startDate,
}) =>
  h(
    'div.carousel-item',
    h('img.carousel-item_image', { src: imageUrl, alt: '', loading: 'lazy' }),
    h(
      'div',
      Controls({ slug, youtubeVideoId }),
      h('p.carousel-item_title', title),
      h('p.carousel-item_subtitle', subtitle),
      h('p.carousel-item_release', `Released: ${relativeDate(startDate)}`)
    )
  )

export default CarouselItem
