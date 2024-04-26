export default {
    name: 'testimonials',
    type: 'document',
    title: 'Testimonials',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'company',
        type: 'string',
        title: 'Company'
      },
      {
        name: 'imageUrl',
        type: 'image',
        title: 'ImgURL',
        options:{
            hotspot: true
        }
      },
      {
        name: 'feedback',
        type: 'string',
        title: 'Feedback'
      }
    ]
  }