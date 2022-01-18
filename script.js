
    const image = document.querySelector('.cust_img');
    const name = document.querySelector('.name');
    const review = document.querySelector('.review');
    const star1 = document.querySelector('.one');
    const star2 = document.querySelector('.two');
    const star3 = document.querySelector('.three');
    const star4 = document.querySelector('.four');
    const star5 = document.querySelector('.five');
    const btn_left = document.querySelector('.btn-left');
    const btn_right = document.querySelector('.btn-right');
    let index = 0;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {

        let fullImg = `./images/image${img + 1}.png`;
        let customer = new Customer(fullImg, name, text);

        customers.push(customer);
    }


    createCustomer(0, 'Amy', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book");

    createCustomer(1, 'Michelle', '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.');

    createCustomer(2, 'Dani', 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; ');

    createCustomer(3, 'Justin', 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.');

    createCustomer(4, 'Candice', "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)");

    createCustomer(5, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');

    function remove_stars(index) {
        if (index == 1) {
            star1.classList.add("checked");
            star2.classList.add("checked");
            star3.classList.add("checked");
            star4.classList.add("checked");
            star5.classList.add("checked");
        } else if (index == 2) {
            star1.classList.add("checked");
            star2.classList.add("checked");
            star3.classList.add("checked");
            star4.classList.add("checked");
            star5.classList.add("checked");
            star4.classList.remove("checked");
            star5.classList.remove("checked");
        } else if (index == 3) {
            star1.classList.add("checked");
            star2.classList.add("checked");
            star3.classList.add("checked");
            star4.classList.add("checked");
            star5.classList.add("checked");
        } else if (index == 4) {
            star1.classList.add("checked");
            star2.classList.add("checked");
            star3.classList.add("checked");
            star4.classList.add("checked");
            star5.classList.add("checked");
            star5.classList.remove("checked");
        } else if (index == 5) {
            star1.classList.add("checked");
            star2.classList.add("checked");
            star3.classList.add("checked");
            star4.classList.add("checked");
            star5.classList.add("checked");
        } else {
            star1.classList.add("checked");
            star2.classList.add("checked");
            star3.classList.add("checked");
            star4.classList.add("checked");
            star5.classList.add("checked");
            star3.classList.remove("checked");
            star4.classList.remove("checked");
            star5.classList.remove("checked");
        }
    }

    btn_left.addEventListener("click", function () {
        if (index == 0) {
            index = 6;
        }
        index--;
        remove_stars(index);
        image.src = customers[index].img;
        name.textContent = customers[index].name;
        review.textContent = customers[index].text;
    });

    btn_right.addEventListener("click", function () {
        if (index == 5) {
            index = -1;
        }
        index++;
        console.log(index);
        image.src = customers[index].img;
        name.textContent = customers[index].name;
        review.textContent = customers[index].text;
        remove_stars(index);
    });
            


