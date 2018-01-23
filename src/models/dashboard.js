
export default {
  namespace: 'dashboard',
  state: {
    figurecard: [
      {
        icon: 'book',
        title: 'Bookings',
        number: 400,
        color: 'green',
        sub: 'Get More Space...',
        subIcon: 'info-circle'
      }, {
        icon: 'eye-o',
        title: 'Views',
        number: 300,
        color: 'pink',
        sub: 'Google Analytics',
        subIcon: 'tag'
      }, {
        icon: 'calendar',
        title: 'Next Launch in',
        number: 200,
        color: 'blue',
        sub: 'Days',
        subIcon: 'calendar'
      }, {
        icon: 'team',
        title: 'Followers',
        number: 100,
        color: 'yellow',
        sub: 'Just Updated',
        subIcon: 'solution'
      }
    ],
    imagecard: [
      {
        image: '1',
        title: 'here is title',
        desc: 'here is desc ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      },
      {
        image: '1',
        title: 'here is title',
        desc: 'here is desc ...',
        footerTitle: 'footer title',
        position: 'London, UK'
      },
      {
        image: '1',
        title: 'here is title',
        desc: 'here is desc ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      },
      {
        image: '1',
        title: 'here is title',
        desc: 'here is desc，Ba la Ba la Ba la ...',
        footerTitle: 'footer title',
        position: 'Peiking, China'
      },
      {
        image: '1',
        title: 'Title',
        desc: 'here is desc，Ba la Ba la Ba la Ba la Ba  ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      },
      {
        image: '1',
        title: 'here is title',
        desc: 'here is desc，Ba la Ba la Ba la Ba la Bla ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      }
    ]
  },
  subscriptions: {
    setup ({ dispatch, history }) {
    }
  },
  effects: {

  },
  reducers: {

  }
}
