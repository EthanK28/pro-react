import update from 'react-addons-update';


let originalTicket={ company: 'Dalta', flightNo: '0990', departure: {
    airport: 'LAS',
    time: '2016-08-21T10:00:00.000Z'
  },
  arrival: {
    airport: 'MIA',
    time: '2016-08-21T14:41:10.000Z'
  },
  codeshare: [
    {company:'GL', flightNo:'9840'},
    {company:'TM', flightNo:'5010'}
  ]
}


//
// let newTicket = update(originalTicket, { arrival: {
//                            airport: {$set: 'MCO'}
//                          }
// });

let newTicket = update(originalTicket, {
                          codeshare: {
                                0: { $set: {company:'AZ', flightNo:'7320'} }
                            }
                         });

console.log(originalTicket);
console.log(newTicket);

let initialArray = [1, 2, 3];
let newArray = update(initialArray, {$push: [4]});
console.log(newArray);

let secondArray = [1, 2, 3];
let secondNewArray = update(initialArray, {$unshift: [0]});
console.log(secondNewArray);






// let student = {name:'John Caster', grades:['A','C','B']}
//
// let newStudent = update(student, {grades:{$push: ['A']}})
//
// let newStudent = update(student, {grades:{$set: ['A','A','B']}})
