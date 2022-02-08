import React from "react";
import "./News.css";

const News = () => {
  return (
    <div className="News_block">
      <div className="News">
        <div className="NewsCard">
          <div className="Card_1">
            <span className="Card_title">Bloknot-Taganrog</span>

            <div class="contacts">
              <div className="icon">
                <img src="Images/web.png" alt="web-link" />
                <a href="https://bloknot-taganrog.ru/" />
              </div>

              <div className="icon">
                <img src="Images/instagram.png" alt="instagram-link" />
                <a href="https://www.instagram.com/bloknot.taganrog/" />
              </div>
            </div>
          </div>

          <div className="Card_2">
            <span className="Card_title">LIfe-News</span>

            <div class="contacts">
              <div className="icon">
                <img src="Images/web.png" alt="web-link" />
                <a href="https://life.ru/" />
              </div>

              <div className="icon">
                <img src="Images/instagram.png" alt="instagram-link" />
                <a href="https://www.instagram.com/lifenews_ru/" />
              </div>
            </div>
          </div>

          <div className="Card_3">
            <span className="Card_title">Rbc</span>

            <div class="contacts">
              <div className="icon">
                <img src="Images/web.png" alt="web-link" />
                <a href="https://www.rbc.ru/" />
              </div>
            </div>
          </div>

          <div className="Card_4">
            <span className="Card_title">Habr-news</span>

            <div class="contacts">
              <div className="icon">
                <img src="Images/web.png" alt="web-link" />
                <a href="https://habr.com/ru/news/" />
              </div>
            </div>
          </div>

          <div className="Card_5">
            <span className="Card_title">Cryptocurrency-news</span>

            <div class="contacts">
              <div className="icon">
                <img src="Images/web.png" alt="web-link" />
                <a href="https://ru.investing.com/news/cryptocurrency-news" />
              </div>
            </div>
          </div>

          <div className="Card_6">
            <span className="Card_title">BBC-travel</span>

            <div class="contacts">
              <div className="icon">
                <img src="Images/web.png" alt="web-link" />
                <a href="https://www.bbc.com/travel" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
