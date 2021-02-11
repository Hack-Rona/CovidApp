const CarouselData = [
  {
    title: "The coronavirus pandemic's new normal could be an unequal one",
    description:
      "As both vaccinations and acquired immunity spread, life will likely settle into a new normal that will resemble pre-COVID-19 days — with some major twists.The big picture: While hospitalizations and deaths are tamped down, the novel coronavirus should recede …",
    url:
      "https://www.axios.com/coronavirus-endemic-new-normal-pandemic-94cb05ac-e3f5-4b2c-ab16-c4883ace1e65.html",
    urlToImage:
      "https://images.axios.com/nUPuWxkFbep4vvrLB-rtIYUMqpc=/0x0:1920x1080/1366x768/2021/02/10/1612968873148.jpg",
  },
  {
    title: "Weekly Menu Planning - December 2020",
    description:
      "I'm so sorry you had to miss this. Perhaps at least you can tell yourself that covid meant his bar mitzvah speech was less excruciating for him than it would normally be because he could 'hide' behind a mask instead of being in front of everyone on the bimah.…",
    url:
      "https://www.chowhound.com/post/weekly-menu-planning-december-2020-1095296?commentId=10313062#10313062",
    urlToImage:
      "https://chowhound3.cbsistatic.com/s/og_image_default-a17ab5029ec2cce14c046d8cd426a354.jpg",
  },
  {
    title:
      "Rough Day in the Parks – Disney World wait times for Wednesday, February 10, 2021",
    description:
      "It was tough to be a Castmember in Disney World today.  Rise of the Resistance …",
    url:
      "https://touringplans.com/blog/2021/02/10/rough-day-in-the-parks-disney-world-wait-times-for-wednesday-february-10-2021/",
    urlToImage:
      "https://blog-cdn.touringplans.com/blog/wp-content/uploads/2021/02/wait-times-021021.png",
  },
  {
    title:
      "COVID-19: Care providers beg B.C. for spurned and shelved rapid tests",
    description:
      "Only a small fraction of B.C.’s supply of rapid COVID-19 tests has been distributed, prompting those who care for high risk individuals to plea for the remaining stock lest it sit unused and eventually expire.             As of a month ago, just 230,000 tests…",
    url:
      "https://vancouversun.com/health/care-providers-beg-b-c-for-spurned-and-shelved-rapid-tests",
    urlToImage:
      "https://smartcdn.prod.postmedia.digital/vancouversun/wp-content/uploads/2021/02/afp_92l4he.jpg",
  },
  {
    title: "The latest dating trend in NYC: His and hers COVID rapid tests",
    description:
      "The latest in foreplay: A rapid test for COVID-19. When a guy Mindie Kaplan was seeing offered to pay for her rapid test for their second date, dinner at his place, she was a little bit taken aback. “I wondered if this was the new ‘buy you dinner equals stay …",
    url:
      "https://nypost.com/2021/02/10/the-latest-nyc-dating-trend-his-and-hers-covid-rapid-tests/",
    urlToImage:
      "https://nypost.com/wp-content/uploads/sites/2/2021/02/covid_bouquet-e1612998971169.jpg?quality=90&strip=all&w=1200",
  },
  {
    title:
      "N.L. Progressive Conservatives call for election to be postponed amid COVID outbreak",
    description:
      "ST. JOHN'S, N.L. — With soaring COVID-19 case numbers and community spread in the capital, Newfoundland and Labrador's Progressive Conservative leader is calling for the provincial election to be postponed. In a video press conference Wednesday, Ches Crosbie …",
    url:
      "https://ca.news.yahoo.com/even-community-spread-covid-19-090000590.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/J0yqmG8krv3y8b0U0UTwiQ--~B/aD01ODQ7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/cp.org/105e950a0b8dee697e21f967ef439743",
  },
];

export default CarouselData;
// export default class CarouselData extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     };
//   }

//   componentDidMount() {
//     fetch(
//       "https://http://newsapi.org/v2/everything?q=covid&q=vaccine&language=en&from=2021-02-09&sortBy=publishedAt&apiKey=6bc4dea68145445b87cc52d607e0840d"
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           isLoaded: true,
//           items: json,
//         });
//       });
//   }

//   render() {
//     var { isLoaded, items } = this.state;

//     if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <div className="App">
//           <ul>
//             {items.map((item) => (
//               <li key={item.id}>
//                 Title:{item.title} | Description: {item.description}
//               </li>
//             ))}
//             ;
//           </ul>
//         </div>
//       );
//     }
//   }
// }
