import React from 'react';
import './Textbook-module.scss';

export default function TextbookModule() {
  return (
    <div className="textbook-module">
      <h2>Textbook Module</h2>
      <p>
        Пусть эти кнопки пока полежат здесь.
        <br />
        Я потом придумаю, куда их лучше прикрутить. Или может у вас есть идеи по этому поводу?
      </p>
      <p>
        Также здесь будет навигация по 6 разделам учебника, например в виде табов (Tabs),
        и в виде, например, пагинации для 30-ти страниц каждого раздела
      </p>
      <p>
        под вот этим вот всем бедут ссылки (карточки?) на 4 игры
      </p>
    </div>
  );
}
