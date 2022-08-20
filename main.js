

const people = ["Robert" , "Allen", "Christine", "Mark"];
const review = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed quae suscipit laboriosam magnam enim sit omnis inventore, fugiat sunt perspiciatis at, quis soluta, maiores doloribus! Quae eligendi nam eaque. PERSON1", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, temporibus culpa aliquam atque sed perferendis ex expedita similique laborum ipsam asperiores nobis odio nam a cum ab! Quo, quisquam soluta? PERSON2", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum tempore, quibusdam eaque voluptatem fugiat dolores vero, suscipit maiores voluptas accusamus, earum non expedita praesentium distinctio soluta ratione asperiores laboriosam facere. PERSON3", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam perferendis minima inventore repellat quo voluptatem atque ullam accusantium incidunt deleniti explicabo ut, consectetur odio. Iure necessitatibus saepe officia sed! PERSON4"]

document.getElementById("client-name").innerHTML = people[0];
document.getElementById("client-review").innerHTML = review[0];



var i = 1;

function nextclient(){


    if(i < 4){
        
        let a = `url(/Carousel_Reviews/img/Person_${i+1}.png)`;
        document.getElementById('user-img').style.backgroundImage = a;
        
        document.getElementById("client-name").innerHTML = people[i];
        
        document.getElementById(`client-review`).innerHTML = review[i];
        
        i = i+1;
    }
    else{
        i = 0;
        nextclient();
    }
}

function previousclient(){


    if(i > 1){
        let a = `url(/Carousel_Reviews/img/Person_${i-1}.png)`;
            document.getElementById('user-img').style.backgroundImage = a;

            document.getElementById("client-name").innerHTML = people[i-2];

            document.getElementById("client-review").innerHTML = review[i-2];

            i = i-1;

    }
    else{
        i = 5;
        previousclient();
    }
}