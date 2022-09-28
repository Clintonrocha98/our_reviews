const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
const img = document.getElementById("person_img");
const author = document.getElementById("person_name");
const job = document.getElementById("person_job");
const info = document.getElementById("info");

const btns = document.querySelectorAll('.btn')

let cont = 0
function showPerson(person){
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}
window.addEventListener('DOMContentLoaded', ()=>{
    const item = reviews[cont]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
})

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){

        if(e.currentTarget.classList.contains('next_btn')){
            cont++
            if( cont > reviews.length - 1){
                cont = 0
            }
            showPerson(cont)
        }
        if(e.currentTarget.classList.contains('prev_btn')) {
            cont--
            if( cont < 0){
                cont = reviews.length -1
            } 
            showPerson(cont)
        }
        if(e.currentTarget.classList.contains('random_btn')) {
            cont = Math.floor(Math.random() * reviews.length)
            showPerson(cont) 
        }

        
    })
})

