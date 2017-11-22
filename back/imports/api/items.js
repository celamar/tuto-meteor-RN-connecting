import { Mongo } from 'meteor/mongo';

const Items = new Mongo.Collection('items');

console.log('toto');
// ADD THIS apres verification Connected to DDP server.
// Meteor.methods({
//   'Items.addOne': ({ name }) => {
//     return Items.insert({ name });
//   },
// });

export default Items;