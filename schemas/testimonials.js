export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields:[
        {
            name: 'name',
            title: 'name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImageUrl',
            type: 'image',
            option: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },
]
}