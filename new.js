function updateLastUserActivity(user){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
		user.lastActivityTime=new Date();

		resolve();

	},1000)

})

}

function createPost(user,post){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      user.posts.push(post);
      resolve();
    },1000)
  })
}
function deletePost(user){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const val=user.posts.pop();
      resolve(val);
    })
  })
}
const user = {
  name: 'John',
  lastActivityTime: null,
  posts: [],
};  

Promise.all([createPost(user,'POST 1'),updateLastUserActivity(user)]).then(()=>{
  console.log('Promise resolved');
  console.log(`Posts: ${user.posts}`);
  console.log(`Last Activity: ${user.lastActivityTime}`);
  deletePost(user).then((msg1)=>{
    console.log(`Deleted Post: ${msg1}`);
  })
})