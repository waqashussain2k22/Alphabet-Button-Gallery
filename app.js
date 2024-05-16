
function showWordsAndImages(letter) {
    const wordsAndImages = {
        'A': [
            { word: 'Apple', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg' },
            { word: 'Ant', image: 'https://www.shutterstock.com/image-vector/cute-ant-cartoonvector-illustration-600nw-480060628.jpg' },
            { word: 'A  irplane ', image: 'https://img.freepik.com/free-photo/planes-wing-cuts-through-sky-cotton-candy-clouds-during-radiant-sunset_91128-4456.jpg' }
        ],
        'B': [
            { word: 'Banana', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/220px-Banana-Single.jpg' },
            { word: 'Bear', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg' },
            { word: 'Bicycle', image: 'https://thumbs.dreamstime.com/b/red-bicycle-20324844.jpg' }
        ],
        'C': [
            { word: 'Cat', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg' },
            { word: 'Car', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D' },
            { word: 'Cake', image: 'https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg' }
        ],
        'D': [
            { word: 'Dog', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/1200px-Golde33443.jpg' },
            { word: 'Dolphin', image: 'https://www.shutterstock.com/image-photo/three-beautiful-dolphins-jumping-over-600nw-388057081.jpg' },
            { word: 'Duck', image: 'https://media.istockphoto.com/id/1092941632/photo/white-duck.jpg?s=612x612&w=0&k=20&c=Ydjb45o8UQrvspwpaqm6FZZn9PCrIF7jF7i6U5uCl8Q=' }
        ],
        'E': [
            { word: 'Elephant', image: 'https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg' },
            { word: 'Eagle', image: 'https://www.shutterstock.com/image-photo/majestic-bald-eagle-soaring-majestically-600nw-2364347943.jpg' },
            { word: 'Earth', image: 'https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_640.jpg' }
        ],
        'F': [
            { word: 'Fish', image: 'https://t3.ftcdn.net/jpg/05/66/14/16/360_F_566141635_0kJ26Xqbl2fTI1dFQBHJpRBWOM6C5Ryp.jpg' },
            { word: 'Flower', image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg' },
            { word: 'Fox', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwZm94fGVufDB8fDB8fHww' }
        ],
        'G': [
            { word: 'Giraffe', image: 'https://i.pinimg.com/736x/ea/1c/52/ea1c526f46561dfb5443320a22e18268.jpg' },
            { word: 'Grapes', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/1200px-Table_grapes_on_white.jpg' },
            { word: 'Goat', image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hdHxlbnwwfHwwfHx8MA%3D%3D' }
        ],
        'H': [
            { word: 'Horse', image: 'https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?cs=srgb&dl=pexels-wildlittlethingsphoto-1996333.jpg&fm=jpg' },
            { word: 'House', image: 'https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4=' },
            { word: 'Hamburger', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg' }
        ],
        'I': [
            { word: 'Ice Cream', image: 'https://t4.ftcdn.net/jpg/06/15/69/85/360_F_615698552_jqO2rh2uigkhb8ZLKTmTRLeeBQKtnehC.jpg' },
            { word: 'Island', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_-iim9njXJK1aED1tbPGlpnyEK32oDsdaMx28aXizw&s' },
            { word: 'Iceberg', image: 'https://cdn.britannica.com/07/152307-050-6FD0D3EE/Iceberg-waters-Antarctica.jpg' }
        ],
        'J': [
            { word: 'Jellyfish', image: 'https://t3.ftcdn.net/jpg/06/23/92/74/360_F_623927486_8K0B5JxVbY69y9NPlfg5qgkRE2bRB2lS.jpg' },
            { word: 'Jug', image: 'https://cdn3.vectorstock.com/i/1000x1000/44/92/red-ceramic-jug-with-milk-vector-17654492.jpg' },
            { word: 'juice', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8fDA%3D' }
        ],
        'K': [
            { word: 'Kite', image: 'https://img.freepik.com/free-vector/colorful-kite-flying-blue-sky_1308-29925.jpg' },
            { word: 'Kangaroo', image: 'https://www.shutterstock.com/image-photo/mother-kangaroo-showing-off-her-260nw-2012976788.jpg' },
            { word: 'Keyboard', image: 'https://www.shutterstock.com/image-vector/vector-black-pc-keyboard-very-260nw-1026742981.jpg' }
        ],
        'L': [
            { word: 'Lion', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg' },
            { word: 'Lemon', image: 'https://thumbs.dreamstime.com/b/lemon-isolated-24834437.jpg' },
            { word: 'Laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVhC5gBAeUUliOCSQZH3opqc-e9c8NnUQsVuxwIE8KQ&s' }
        ],
        'M': [
            { word: 'Mecca', image: 'https://t4.ftcdn.net/jpg/02/60/18/09/360_F_260180924_yOJC8NytSXhmkBzDqHkoTL7CU0qcJDi7.jpg' },
            { word: 'Madina', image: 'https://www.shutterstock.com/image-photo/saudi-arabiamadina28052019masjid-nabwi-minerats-green-260nw-1491610727.jpg' },
            { word: 'Moon', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsw2K1bJvcnM1XqaQ8p78fC9jo-oNqztz3tQtuiLhGeA&s' }
        ],
        'N': [
            { word: 'Nest', image: 'https://t4.ftcdn.net/jpg/00/30/25/75/360_F_30257565_GcXxbj6xBHc62qTyUNv6ZZE9L79f2fX9.jpg' },
            { word: 'Net', image: 'https://png.pngtree.com/png-clipart/20201212/ourmid/pngtree-net-clipart-png-image_2536979.jpg' },
            { word: 'Notebook', image: 'https://www.shutterstock.com/image-photo/school-notebook-on-blue-background-260nw-753361672.jpg' }
        ],
        'O': [
            { word: 'Orange', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Orange-Whole-%26-Split.jpg/1200px-Orange-Whole-%26-Split.jpg' },
            { word: 'Octopus', image: 'https://cdn.britannica.com/98/157198-050-8B4735F2/Octopus-swimming.jpg' },
            { word: 'Owl', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71f6Eujpf1hq8fGajfO_HFZjwXnwR7qzKci04hjWvlQ&s' }
        ],
        'P': [
            { word: 'Penguin', image: 'https://cdn.britannica.com/70/192570-138-848FB7B3/penguin-species-places-Galapagos-Antarctica.jpg?w=800&h=450&c=crop' },
            { word: 'Pizza', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/1200px-Eq_it-na_pizza-margherita_sep2005_sml.jpg' },
            { word: 'Pineapple', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/1200px-Pineapple_and_cross_section.jpg' }
        ],
        'Q': [
            { word: 'Quill', image: 'https://t4.ftcdn.net/jpg/00/59/25/77/360_F_59257794_YswnZqbYiW7J56jxJM2Pz8mapl7sCsTb.jpg' },
            { word: 'Quilt', image: 'https://theurdudictionary.com/dictionary_images/duvet.jpg' },
            { word: 'Question', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4eWJTytgRX5NKSnN1tCo2Toj1FmgXlduPI4VCMe6sw&s' }
        ],
        'R': [
            { word: 'Rabbit', image: 'https://www.humanesociety.org/sites/default/files/2019/03/rabbit-475261_0.jpg' },
            { word: 'Rainbow', image: 'https://parade.com/.image/t_share/MTk3ODI4MzcxMjAyMTg4NDYw/colors-of-the-rainbow.jpg' },
            { word: 'Rocket', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3rrPWMpfSEm0gtRGCxJ_fmX0IWv3VotMtHnnSIRMYg&s' }
        ],
        'S': [
            { word: 'Sun', image: 'https://cf.ltkcdn.net/kids/images/orig/337581-2122x1412-sun-1337609597.jpg' },
            { word: 'Strawberry', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/1200px-PerfectStrawberry.jpg' },
            { word: 'Star', image: 'https://cdn.britannica.com/07/186507-138-CCAD17CA/Overview-types-stars-red-dwarf-giant-supergiant.jpg?w=800&h=450&c=crop' }
        ],
        'T': [
            { word: 'Tiger', image: 'https://optimise2.assets-servd.host/maniacal-finch/production/animals/amur-tiger-01-01.jpg?w=1200&h=630&q=82&auto=format&fit=clip&dm=1658935145&s=42eaff37ee45905b3f1a70241c25d007' },
            { word: 'Train', image: 'https://i.tribune.com.pk/media/images/1659069-image-1520963116/1659069-image-1520963116.jpg' },
            { word: 'Turtle', image: 'https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2022/05/shutterstock_1681383049-1280x640.jpg' }
        ],
        'U': [
            { word: 'Umbrella', image: 'https://www.superfotos.pk/wp-content/uploads/2020/09/1-46.jpg' },
            { word: 'Unicorn', image: 'https://img.freepik.com/free-vector/adorable-pink-unicorn-with-stars_1308-146486.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714953600&semt=sph' },
            { word: 'Under', image: 'https://png.pngtree.com/element_pic/00/16/06/24576cfc3dc93a0.jpg' }
        ],
        'V': [
            { word: 'Van', image: 'https://www.apricottours.pk/wp-content/uploads/2017/03/premium-high-roof-van.jpg' },
            { word: 'Vagetable', image: 'https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg' },
            { word: 'Vase', image: 'https://m.media-amazon.com/images/I/61KvH-iybDL._AC_UF894,1000_QL80_.jpg' }
        ],
        'W': [
            { word: 'Watermelon', image: 'https://static.toiimg.com/thumb/msid-109932142,width-400,resizemode-4/109932142.jpg' },
            { word: 'Whale', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsO2lXqYU6Cb4-F_oCYq-sl7drMTe1iU8CIB4KFUGNmA&s' },
            { word: 'Watch', image: 'https://m.media-amazon.com/images/I/71fJ8PJ8ooL._AC_UL1500_.jpg' }
        ],
        'X': [
            { word: 'Xylocarp', image: 'https://i.pinimg.com/originals/22/5e/74/225e7422aef3e1aae5012d39b512dc2f.jpg' },
            { word: 'X-ray', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzK9GlIkoAiFPLfVI93Yyf9ckpoqGIBwMYWykYcpi0A&s' },
            { word: 'Xebec', image: 'https://www.shutterstock.com/image-vector/pirate-ship-xebec-sailing-under-260nw-174827711.jpg' }
        ],
        'Y': [
            { word: 'Yak', image: 'https://w7.pngwing.com/pngs/317/155/png-transparent-domestic-yak-wild-yak-tibet-others-cow-goat-family-wildlife-terrestrial-animal-thumbnail.png' },
            { word: 'Yacht', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAti0oq9_MQWEnqrSOTH16aQIGHjesceqJ6t1XHtOZbA&s' },
            { word: 'Yarn', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDH-39nX07oWspfREv0-T2UxmODcOEeqvA-d27XZ4bqA&s' }
        ],
        'Z': [
            { word: 'Zebra', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg/640px-Equus_quagga_burchellii_-_Etosha%2C_2014.jpg' },
            { word: 'Zucchini', image: 'https://images1.wionews.com/images/wion/900x1600/2023/11/23/1700745882486_315f5ebb0cb4b3991833f9238c94088d.jpg' },
            { word: 'Zipper', image: 'https://www.wawak.com/49583d/globalassets/catalogs/bz53/bz53mbr/bz53mbr-1-main-0.jpg' }
        ]
        
    };
    console.log(wordsAndImages);

   
    const wordContainer = document.getElementById('word-container');
    const imageContainer = document.getElementById('image-container');

    // Clear previous content
    wordContainer.innerHTML = '';
    imageContainer.innerHTML = '';

    // Check if the letter exists in the object
    if (wordsAndImages.hasOwnProperty(letter)) {
        const wordsAndImagesForLetter = wordsAndImages[letter];
        wordsAndImagesForLetter.forEach(item => {
            // Create elements for word and image
            const wordElement = document.createElement('div');
            wordElement.textContent = item.word;
            const imageElement = document.createElement('img');
            imageElement.src = item.image;

            // Create a container for word and image pair
            const wordImageItem = document.createElement('div');
            wordImageItem.classList.add('word-image-item');

            // Append elements to their respective containers
            wordImageItem.appendChild(wordElement);
            wordImageItem.appendChild(imageElement);
            
            wordContainer.appendChild(wordImageItem);
        });
    } else {
        wordContainer.textContent = 'No words found for this letter.';
    }
}
