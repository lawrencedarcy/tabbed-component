document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    function generateTabbedComponent(tabs) {
      const tabNames = Array.from(arguments);
      const defaultTab = tabNames[0];

      function createTabsHeaders() {
        tabNames.forEach((tabName, i) => {
          let headerDiv = document.createElement('div');
          headerDiv.innerHTML = `${tabName.replace('-', ' ')}`;
          headerDiv.classList.add('tab');
          i === 0 && headerDiv.classList.add('current-tab');
          headerDiv.id = tabName;
          document.getElementById('tabs-header').append(headerDiv);
        });
      }

      function fetchData(term) {
        const url = 'https://content.guardianapis.com/search?';
        const section = `section=${term}`;
        const key = '&api-key=test';
        fetch(url + section + key)
          .then((response) => response.json())
          .then((data) => {
            clearContent();
            data.response.results.forEach((story, i) =>
              addListItem(story, i + 1)
            );
          });
      }

      function clearContent() {
        const contentList = document.getElementById('content-list');
        while (contentList.firstChild) {
          contentList.removeChild(contentList.lastChild);
        }
      }

      function addListItem(story, i) {
        const item = document.createElement('li');
        item.setAttribute('href', story.webUrl);
        item.innerHTML = `${i + '. ' + story.webTitle}`;
        item.classList.add('list-item');
        document.getElementById('content-list').append(item);
      }

      document.addEventListener(
        'click',
        function clickHandler(event) {
          if (event.target.id) {
            event.preventDefault();
            document
              .getElementsByClassName('current-tab')[0]
              .classList.remove('current-tab');
            document
              .getElementById(event.target.id)
              .classList.add('current-tab');
            fetchData(event.target.id);
          }
        },
        false
      );

      createTabsHeaders();
      fetchData(defaultTab);
    }

    // Add as many tabs as you like here –– names must exactly match Guardian API sections
    generateTabbedComponent('uk-news', 'football', 'travel');
  }
};
