import UserRepository from '../../repositories/user/UserRepository';
const repository = new UserRepository();

export default function seed  () {
  repository.userCount()
  .then((result) => {
    if (result === 0) {
      repository.create({
        email: 'head.trainer@successive.tech',
        name: 'Head-trainer',
        role: 'head-trainer',
      });
      repository.create({
        email: 'traineee@successive.tech',
        name: 'rahul',
        role: 'trainee',
      });
    }
    
   

  });
}
export function deleteData() {
  repository.delete()
  .then((result) => {
    console.log('Deleted the data');
  } );
}
export function getOne(data) {
  repository.userFind(data)
  .then((result) => {
    console.log("data is"+result);
  } );
}


export function UpdateData() {
  repository.update()
  .then((result) => {
    console.log('Data Updated')
});
}
