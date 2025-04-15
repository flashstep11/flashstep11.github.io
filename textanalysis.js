function analyzeText() {
    const text = document.getElementById('textInput').value;


    const letters = text.match(/[a-zA-Z]/g)?.length || 0;
    const words = text.split(/\s+/).filter(word => word.length > 0).length;
    const spaces = text.match(/\s/g)?.length || 0;
    const newlines = text.match(/\n/g)?.length || 0;
    const specialSymbols = text.match(/[^a-zA-Z0-9\s]/g)?.length || 0;


    document.getElementById('lettersCount').textContent = `Letters: ${letters}`;
    document.getElementById('wordsCount').textContent = `Words: ${words}`;
    document.getElementById('spacesCount').textContent = `Spaces: ${spaces}`;
    document.getElementById('newlinesCount').textContent = `Newlines: ${newlines}`;
    document.getElementById('specialSymbolsCount').textContent = `Special Symbols: ${specialSymbols}`;


    const tokens = text.toLowerCase().split(/\s+/).filter(word => word.length > 0);

    const pronounsList = [
        'i', 'me', 'my', 'mine', 'you', 'your', 'yours', 'he', 'him', 'his',
        'she', 'her', 'hers', 'it', 'its', 'we', 'us', 'our', 'ours', 'they',
        'them', 'their', 'theirs'
    ];
    const pronounsCount = {};
    pronounsList.forEach(pronoun => pronounsCount[pronoun] = 0);
    tokens.forEach(token => {
        if (pronounsList.includes(token)) {
            pronounsCount[token]++;
        }
    });

    
    const pronounsDiv = document.getElementById('pronounsCount');
    pronounsDiv.innerHTML = '';
    for (const [pronoun, count] of Object.entries(pronounsCount)) {
        if (count > 0) {
            const p = document.createElement('p');
            p.textContent = `${pronoun}: ${count}`;
            pronounsDiv.appendChild(p);
        }
    }

    
    const prepositionsList = [
        'about', 'above', 'across', 'after', 'against', 'along', 'among', 'around',
        'at', 'before', 'behind', 'below', 'beneath', 'beside', 'between', 'beyond',
        'by', 'down', 'during', 'except', 'for', 'from', 'in', 'inside', 'into',
        'like', 'near', 'of', 'off', 'on', 'onto', 'out', 'outside', 'over', 'past',
        'since', 'through', 'throughout', 'to', 'toward', 'under', 'until', 'up',
        'upon', 'with', 'within', 'without'
    ];
    const prepositionsCount = {};
    prepositionsList.forEach(prep => prepositionsCount[prep] = 0);
    tokens.forEach(token => {
        if (prepositionsList.includes(token)) {
            prepositionsCount[token]++;
        }
    });

    
    const prepositionsDiv = document.getElementById('prepositionsCount');
    prepositionsDiv.innerHTML = '';
    for (const [prep, count] of Object.entries(prepositionsCount)) {
        if (count > 0) {
            const p = document.createElement('p');
            p.textContent = `${prep}: ${count}`;
            prepositionsDiv.appendChild(p);
        }
    }

    const articlesList = ['a', 'an'];
    const articlesCount = {};
    articlesList.forEach(article => articlesCount[article] = 0);
    tokens.forEach(token => {
        if (articlesList.includes(token)) {
            articlesCount[token]++;
        }
    });

    const articlesDiv = document.getElementById('articlesCount');
    articlesDiv.innerHTML = '';
    for (const [article, count] of Object.entries(articlesCount)) {
        if (count > 0) {
            const p = document.createElement('p');
            p.textContent = `${article}: ${count}`;
            articlesDiv.appendChild(p);
        }
    }
}