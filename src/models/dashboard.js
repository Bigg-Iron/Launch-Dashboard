
export default {
  namespace: 'dashboard',
  state: {
    figurecard: [
      {
        icon: 'book',
        title: 'Bookings',
        number: 184,
        color: 'green',
        sub: 'Get More Space...',
        subIcon: 'info-circle'
      }, {
        icon: 'eye-o',
        title: 'Views',
        number: 75,
        color: 'pink',
        sub: 'Google Analytics',
        subIcon: 'tag'
      }, {
        icon: 'calendar',
        title: 'Next Launch in',
        number: 3,
        color: 'blue',
        sub: 'Days',
        subIcon: 'calendar'
      }, {
        icon: 'team',
        title: 'Followers',
        number: 245,
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
        image: '2',
        title: 'here is title',
        desc: 'here is desc ...',
        footerTitle: 'footer title',
        position: 'London, UK'
      },
      {
        image: '3',
        title: 'here is title',
        desc: 'here is desc ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      },
      {
        image: '4',
        title: 'here is title',
        desc: 'here is desc，Ba la Ba la Ba la ...',
        footerTitle: 'footer title',
        position: 'Peiking, China'
      },
      {
        image: '5',
        title: 'Title',
        desc: 'here is desc，Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      },
      {
        image: '6',
        title: 'here is title',
        desc: 'here is desc，Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la ...',
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
