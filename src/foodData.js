const foodData = [
    {
        id:1,
        name:'Bagel and cream cheese',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:55,
        category:'breakfast',
        image:'https://i.ibb.co/9wh4mnR/breakfast2.png'
    },
    {
        id:2,
        name:'Eggs Benedict',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:45,
        category:'breakfast',
        image:'https://i.ibb.co/0s5Zx5n/breakfast1.png'
    },
    {
        id:3,
        name:'Breakfast sandwitch',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:39,
        category:'breakfast',
        image:'https://i.ibb.co/Fh4f6hw/breakfast3.png'
    },
    {
        id:4,
        name:'Baked chiken',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:64,
        category:'breakfast',
        image:'https://i.ibb.co/N9vs653/breakfast4.png'
    },
    {
        id:5,
        name:'Full breakfast',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:69,
        category:'breakfast',
        image:'https://i.ibb.co/cFMCbB6/breakfast5.png'
    },
    {
        id:6,
        name:'Fried egg',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:10,
        category:'breakfast',
        image:'https://i.ibb.co/2gLnfqY/breakfast6.png'
    },
    {
        id:7,
        name:'Chiken tikka',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:70,
        category:'lunch',
        image:'https://i.ibb.co/c8f2zzt/lunch1.png'
    },
    {
        id:8,
        name:'Tanduri chiken',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:67,
        category:'lunch',
        image:'https://i.ibb.co/xF72gpT/lunch2.png'
    },
    {
        id:9,
        name:'Hajir biriani',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:97,
        category:'lunch',
        image:'https://i.ibb.co/w6pQ1w7/lunch3.png'
    },
    {
        id:10,
        name:'Tehari',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:107,
        category:'lunch',
        image:'https://i.ibb.co/F3LBBNZ/lunch4.png'
    },
    {
        id:11,
        name:'Vegitable rice',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:87,
        category:'lunch',
        image:'https://i.ibb.co/Wnr9gJ8/lunch5.png'
    },
    {
        id:12,
        name:'Fried Rice',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:44,
        category:'lunch',
        image:'https://i.ibb.co/L6SXML2/lunch6.png'
    },
    {
        id:13,
        name:'Mutton kacci',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:74,
        category:'dinner',
        image:'https://i.ibb.co/1RTw0Rp/dinner1.png'
    },
    {
        id:14,
        name:'Nan Ruti',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:14,
        category:'dinner',
        image:'https://i.ibb.co/sV2NrRn/dinner2.png'
    },
    {
        id:15,
        name:'Fish fry',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:33,
        category:'dinner',
        image:'https://i.ibb.co/HgF3Xy2/dinner3.png'
    },
    {
        id:16,
        name:'Chiken fry',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:53,
        category:'dinner',
        image:'https://i.ibb.co/4pWvNKh/dinner4.png'
    },
    {
        id:17,
        name:'Fried fish',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:58,
        category:'dinner',
        image:'https://i.ibb.co/vwTxwSL/dinner5.png'
    },
    {
        id:18,
        name:'Fried vegitable',
        shortDetails:'There are many variations of passages of Lorem Ipsum available',
        details:'One of the best food over here.you can try out this.Amazing foods are here especially for family and friends.we are waiting for your order.we hope you will order.',
        price:58,
        category:'dinner',
        image:'https://i.ibb.co/Y7hBsC3/dinner6.png'
    },



];


export default foodData;