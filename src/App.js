import { useState } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, HorizontalGridLines, XAxis, VerticalBarSeries} from 'react-vis';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const header = [
  'Dashboard',
  'Transactions',
  'Transfers',
  'Cards',
  'Accounts',
];

const data1 = [
  {x: 'Jan', y: 6},
  {x: 'Feb', y: 7},
  {x: 'Mar', y: 5},
  {x: 'Apr', y: 6},
  {x: 'May', y: 5},
  {x: 'Jun', y: 6},
  {x: 'Jul', y: 5},
  {x: 'Aug', y: 6},
  {x: 'Sep', y: 5},
  {x: 'Oct', y: 6},
  {x: 'Nov', y: 5},
  {x: 'Dec', y: 6}
];

const data2 = [
  {x: 'Jan', y: 6},
  {x: 'Feb', y: 7},
  {x: 'Mar', y: 5},
  {x: 'Apr', y: 6},
  {x: 'May', y: 5},
  {x: 'Jun', y: 6},
  {x: 'Jul', y: 5},
  {x: 'Aug', y: 6},
  {x: 'Sep', y: 5},
  {x: 'Oct', y: 6},
  {x: 'Nov', y: 5},
  {x: 'Dec', y: 6}
];

const data3 = [
  {x: 'Jan', y: 6},
  {x: 'Feb', y: 7},
  {x: 'Mar', y: 5},
  {x: 'Apr', y: 6},
  {x: 'May', y: 5},
  {x: 'Jun', y: 6},
  {x: 'Jul', y: 5},
  {x: 'Aug', y: 6},
  {x: 'Sep', y: 5},
  {x: 'Oct', y: 6},
  {x: 'Nov', y: 5},
  {x: 'Dec', y: 6}
];

function App() {
  const [activeTitle, setActiveTitle] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-titles">
          {header.map((title, id) => (
            <p
              key={id}
              onClick={() => setActiveTitle(id)}
              className={activeTitle === id ? ("App-header-title-active") : ("App-header-title")}
            >
              {title}
            </p>
          ))}
        </div>
        <img
          src='https://img.icons8.com/material-rounded/24/FFFFFF/settings.png'
          alt='settings'
          className="App-header-settings"
        />
      </header>
      <div className="App-money">
        <div className="App-money-balance">
          <div className="App-money-currency">
            <p className="App-money-account-balance">
              Account Balance
            </p>
            <div className="App-money-currency-change">
              <img
                src='https://img.icons8.com/ios-glyphs/30/000000/menu.png'
                alt='currency change'
                className="App-money-icon"
                />
              <img
                src='https://img.icons8.com/color/48/000000/canada-circular.png'
                alt='current currency'
                className="App-money-icon"
              />
            </div>
          </div>
          <p className="App-money-value">
            $107,843.82 CAD
          </p>
        </div>
        <div className="App-money-actions">
        <Button variant="outline-secondary">
          + Add Money
        </Button>
        <Button variant="success">
          → Send Money
        </Button>
        </div>
      </div>
      <div className="App-chart-header">
        <div className="App-chart-titles">
          <p className="App-chart-title-text">
            Spending over time
          </p>
          <div className="App-chart-title">
            <div className="App-chart-color1" />
            <p className="App-chart-title-text">
              EFTs
            </p>
          </div>
          <div className="App-chart-title">
            <div className="App-chart-color2" />
            <p className="App-chart-title-text">
              Card payments
            </p>
          </div>
          <div className="App-chart-title">
            <div className="App-chart-color3" />
            <p className="App-chart-title-text">
              International wires
            </p>
          </div>
        </div>
        <ButtonGroup aria-label="Basic example" className="App-chart-term">
          <Button variant="outline-secondary">12 months</Button>
          <Button variant="outline-secondary">30 days</Button>
          <Button variant="outline-secondary">7 days</Button>
        </ButtonGroup>
      </div>
      <XYPlot xType="ordinal" height={300} width={window.innerWidth - 100} margin={{right: 50}} stackBy="y">
        <HorizontalGridLines />
        <XAxis />
        <VerticalBarSeries data={data1} color="#73E2A3" barWidth={0.4} />
        <VerticalBarSeries data={data2} color="#AAF0C4" barWidth={0.4} />
        <VerticalBarSeries data={data3} color="#D3F8DF" barWidth={0.4} />
      </XYPlot>
      <div className="App-recent-transactions-container">
        <div className="App-recent-transactions-header">
          <p className="App-chart-title-text">
            Recent transactions
          </p>
          <div className="App-money-currency-change">
            <img
              src='https://img.icons8.com/material-outlined/24/000000/calendar.png'
              alt='calendar'
              className="App-money-icon"
            />
            <p className="App-chart-title-text">
              Select dates
            </p>
          </div>
        </div>
        <div className="App-recent-transactions-buttons">
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-secondary">View all</Button>
            <Button variant="outline-secondary">Transfers</Button>
            <Button variant="outline-secondary">Cards</Button>
          </ButtonGroup>
        </div>
        <div className="App-recent-transactions">
          <p className="App-recent-transactions-title">
            Transaction
          </p>
          <div className="App-recent-transactions-values">
            <p className="App-recent-transactions-title1">
              Amount
            </p>
            <p className="App-recent-transactions-title2">
              Date
            </p>
            <p className="App-recent-transactions-title3">
              Card
            </p>
          </div>
        </div>
        <div className="App-recent-transactions">
          <div className="App-recent-transactions-values">
            <img
              src='https://img.icons8.com/fluency/48/000000/spotify.png'
              alt='Spotify logo'
              className="App-recent-transactions-icon"
            />
            <p className="App-chart-title-text">
              Spotify
            </p>
          </div>
          <div className="App-recent-transactions-values">
            <p className="App-recent-transactions-title1">
              - $18.99
            </p>
            <p className="App-recent-transactions-title2">
              Wed 1:00pm
            </p>
            <div className="App-recent-transactions-title3">
              <div className="App-recent-transactions-value">
                <img
                  src='https://img.icons8.com/color/48/000000/visa.png'
                  alt='Visa logo'
                  className="App-recent-transactions-icon"
                />
                <div className="App-recent-transactions-card">
                  <p className="App-chart-title-text">
                    Visa 1234
                  </p>
                  <p className="App-chart-title-text">
                    Expiry 06/2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="App-recent-transactions">
          <div className="App-recent-transactions-values">
            <img
              src='https://img.icons8.com/external-others-inmotus-design/67/000000/external-A-geo-others-inmotus-design-2.png'
              alt='Company logo'
              className="App-recent-transactions-icon"
            />
            <p className="App-chart-title-text">
              A Coffee
            </p>
          </div>
          <div className="App-recent-transactions-values">
            <p className="App-recent-transactions-title1">
              - $4.50
            </p>
            <p className="App-recent-transactions-title2">
              Wed 7:20am
            </p>
            <div className="App-recent-transactions-title3">
              <div className="App-recent-transactions-value">
                <img
                  src='https://img.icons8.com/color/48/000000/visa.png'
                  alt='Visa logo'
                  className="App-recent-transactions-icon"
                />
                <div className="App-recent-transactions-card">
                  <p className="App-chart-title-text">
                    Visa 1234
                  </p>
                  <p className="App-chart-title-text">
                    Expiry 06/2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="App-recent-transactions">
          <div className="App-recent-transactions-values">
            <img
              src='https://img.icons8.com/ios-filled/50/000000/circled-s.png'
              alt='Stripe logo'
              className="App-recent-transactions-icon"
            />
            <p className="App-chart-title-text">
              Stripe
            </p>
          </div>
          <div className="App-recent-transactions-values">
            <p className="App-recent-transactions-title1" style={{color: 'green'}}>
              + $88.00
            </p>
            <p className="App-recent-transactions-title2">
              Wed 2:45am
            </p>
            <div className="App-recent-transactions-title3">
              <div className="App-recent-transactions-value">
                <img
                  src='https://img.icons8.com/color/48/000000/mastercard-logo.png'
                  alt='Mastercard logo'
                  className="App-recent-transactions-icon"
                />
                <div className="App-recent-transactions-card">
                  <p className="App-chart-title-text">
                    Mastercard 1234
                  </p>
                  <p className="App-chart-title-text">
                    Expiry 06/2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="App-recent-transactions">
          <div className="App-recent-transactions-values">
            <img
              src='https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-figma-social-media-tanah-basah-glyph-tanah-basah.png'
              alt='Figma logo'
              className="App-recent-transactions-icon"
            />
            <p className="App-chart-title-text">
              Figma
            </p>
          </div>
          <div className="App-recent-transactions-values">
            <p className="App-recent-transactions-title1">
              - $15.00
            </p>
            <p className="App-recent-transactions-title2">
              Tue 6:10pm
            </p>
            <div className="App-recent-transactions-title3">
              <div className="App-recent-transactions-value">
                <img
                  src='https://img.icons8.com/color/48/000000/visa.png'
                  alt='Visa logo'
                  className="App-recent-transactions-icon"
                />
                <div className="App-recent-transactions-card">
                  <p className="App-chart-title-text">
                    Visa 1234
                  </p>
                  <p className="App-chart-title-text">
                    Expiry 06/2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="App-recent-transactions">
          <div className="App-recent-transactions-values">
            <img
              src='https://img.icons8.com/external-others-inmotus-design/67/000000/external-A-geo-others-inmotus-design-2.png'
              alt='Company logo'
              className="App-recent-transactions-icon"
            />
            <p className="App-chart-title-text">
              TBF Bakery
            </p>
          </div>
          <div className="App-recent-transactions-values">
            <p className="App-recent-transactions-title1">
              - $12.50
            </p>
            <p className="App-recent-transactions-title2">
              Tue 7:52am
            </p>
            <div className="App-recent-transactions-title3">
              <div className="App-recent-transactions-value">
                <img
                  src='https://img.icons8.com/color/48/000000/visa.png'
                  alt='Visa logo'
                  className="App-recent-transactions-icon"
                />
                <div className="App-recent-transactions-card">
                  <p className="App-chart-title-text">
                    Visa 1234
                  </p>
                  <p className="App-chart-title-text">
                    Expiry 06/2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="App-recent-transactions">
          <div className="App-recent-transactions-values">
            <img
              src='https://img.icons8.com/external-others-inmotus-design/67/000000/external-A-geo-others-inmotus-design-2.png'
              alt='Company logo'
              className="App-recent-transactions-icon"
            />
            <p className="App-chart-title-text">
              Fresh F&V
            </p>
          </div>
          <div className="App-recent-transactions-values">
            <p className="App-recent-transactions-title1">
              - $40.20
            </p>
            <p className="App-recent-transactions-title2">
              Tue 12:15pm
            </p>
            <div className="App-recent-transactions-title3">
              <div className="App-recent-transactions-value">
                <img
                  src='https://img.icons8.com/color/48/000000/visa.png'
                  alt='Visa logo'
                  className="App-recent-transactions-icon"
                />
                <div className="App-recent-transactions-card">
                  <p className="App-chart-title-text">
                    Visa 1234
                  </p>
                  <p className="App-chart-title-text">
                    Expiry 06/2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="App-recent-transactions-last">
          <div className="App-recent-transactions-values">
            <img
              src='https://img.icons8.com/ios-filled/50/000000/circled-s.png'
              alt='Stripe logo'
              className="App-recent-transactions-icon"
            />
            <p className="App-chart-title-text">
              Stripe
            </p>
          </div>
          <div className="App-recent-transactions-values">
            <p className="App-recent-transactions-title1" style={{color: 'green'}}>
              + $88.00
            </p>
            <p className="App-recent-transactions-title2">
              Tue 5:40am
            </p>
            <div className="App-recent-transactions-title3">
              <div className="App-recent-transactions-value">
                <img
                  src='https://img.icons8.com/color/48/000000/mastercard-logo.png'
                  alt='Mastercard logo'
                  className="App-recent-transactions-icon"
                />
                <div className="App-recent-transactions-card">
                  <p className="App-chart-title-text">
                    Mastercard 1234
                  </p>
                  <p className="App-chart-title-text">
                    Expiry 06/2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
