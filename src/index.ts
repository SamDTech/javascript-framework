import { User } from './models/User';

const user = new User({ name: 'sam', age: 20 });

user.on('change', ()=>{
console.log('change number one')
})

user.trigger('change')
