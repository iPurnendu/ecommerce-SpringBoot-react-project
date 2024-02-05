export const navigation = {
  categories: [
    {
      id: 'Cumputers and Laptops',
      name: 'Cumputers and Laptops',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'Best Seller',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?q=80&w=2109&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
      sections: [
        {
          id: 'Laptops',
          name: 'Laptops',
          items: [
            { name: 'Dell', id:'dell' ,href: '#' },
            { name: 'HP',id:'hp', href: '#' },
            { name: 'Acer',id:'acer' , href: '#' },
            { name: 'Apple',id:'apple' , href: '#' }, 
            { name: 'Lenovo',id:'lenovo' , href: '#' },
            { name: 'Asus', id:'asus' ,href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'Computer',
          name: 'Computer',
          items: [
            { name: 'SSD', id:'ssd',href: '#' },
            { name: 'RAM',id:'ram', href: '#' },
            { name: 'CPU',id:'cpu', href: '#' },
            { name: 'Hard Disk',id:'harddisk', href: '#' },
            { name: 'Graphics Card',id:'graphic', href: '#' },
            { name: 'Motherboard', id:'amotherboard',href: '#' },
          ],
        },
        {
          id: 'Accessories',
          name: 'Accessories',
          items: [
            { name: 'Charger',id:'charger' , href: '#' },
            { name: 'Gaming Headset',id:'game' , href: '#' },
            { name: 'Laptop Stand',id:'laptop' , href: '#' },
            { name: 'Mouse and Keyboard',id:'mouse' , href: '#' },
            { name: 'Mouse Pad',id:'mousepad' , href: '#' },
          ],
        },
      ],
    },
    {
      id: 'Phones',
      name: 'Phone and Accessories',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1498661705887-3778d9ecb4ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'Best Seller',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          
        },
      ],
      sections: [
        {
          id: 'Phone',
          name: 'Phone',
          items: [
            { name: 'Apple', id:'Iphone',href: '#' },
            { name: 'Samsung',id:'samsung', href: '#' },
            { name: 'Realme',id:'realme',href: '#' },
            { name: 'VIVO',id:'vivo', href: '#' },
            { name: 'Oppo',id:'oppo', href: '#' },
            { name: 'OnePlus',id:'oneplus', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Smart Watches', id:'watch',href: '#' },
            { name: 'Charger',id:'charger' ,href: '#' },
            { name: 'Airpods',id:'airpod' , href: '#' },
            { name: 'Headphones',id:'headphone' , href: '#' },
            { name: 'Wireless headphones',id:'wireless' , href: '#' },
            { name: 'Phone Covers', id:'phone' ,href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'About', href: '/about' },
    { name: 'Custom PC Build', href: '/pcbuild'},
],

}