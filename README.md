# lootle

# Project introduction
**Lootle** -> *(loot-le)* is a website and MIT license open source project where you can keep track of the price of your MacBook or of your favorite Raspberry P or the stock price of Microsoft. You just enter the URL of the product/stock then the website keeps the history of the price fluctuation, presents it to you, and even notifies you when the price drops down that you specified.


# Functions ⚒
Oh, we haven't discussed much on the functions of the website 😅. It checks the price of the product specified. Not only it checks the price, it extracts the name and information of the product from the website. It gathers information on a regular interval of ten minutes and stores inside of the database. If the current price is found to be less than the specified price by the user then, the user will be updated with an email. And the user can also check the history of the price fluctuation through the nice little dashboard.

### Tech stack 👩‍💻
- **Reactjs** -> For frontend
- **MongoDB Atlas** -> For mongoDB database
- **Express.js** -> For API
- **Linode** -> Deployment

# Important links 🔗
1. [GitHub repo of the scrapper](https://github.com/aashishpanthi/lootle-scrapper)
2. [Website](https://lootle.live)
3. [Dashboard](https://lootle.live/app/dashboard)

Currently supported sites:
1. [Flipkart.com](https://flipkart.com) for available products only
2. [Amazon.com](https://amazon.com) for available products only
3. [cnbc.com](https://cnbc.com) for stock price

Thanks to [Linode](https://www.linode.com/) and [Hashnode](https://hashnode.com/) for the services and opportunity provided.
