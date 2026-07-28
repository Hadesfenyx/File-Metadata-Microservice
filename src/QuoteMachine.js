import React, { useState, useEffect } from 'react';
import './QuoteMachine.css';

const quotes = [
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs'
  },
  {
    text: 'Innovation distinguishes between a leader and a follower.',
    author: 'Steve Jobs'
  },
  {
    text: 'Life is what happens when you\'re busy making other plans.',
    author: 'John Lennon'
  },
  {
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt'
  },
  {
    text: 'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle'
  },
  {
    text: 'The only impossible journey is the one you never begin.',
    author: 'Tony Robbins'
  },
  {
    text: 'Success is not final, failure is not fatal.',
    author: 'Winston Churchill'
  },
  {
    text: 'Believe you can and you\'re halfway there.',
    author: 'Theodore Roosevelt'
  },
  {
    text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
    author: 'Chinese Proverb'
  },
  {
    text: 'Your time is limited, don\'t waste it living someone else\'s life.',
    author: 'Steve Jobs'
  },
  {
    text: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney'
  },
  {
    text: 'Don\'t watch the clock; do what it does. Keep going.',
    author: 'Sam Levenson'
  }
];

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote from API, using local quotes:', error);
      const randomQuote = getRandomQuote();
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" — ${author}`;

  return (
    <div id="quote-box">
      <div id="text">{quote || 'Loading...'}</div>
      <div id="author">{author || ''}</div>
      <div className="button-container">
        <a
          id="tweet-quote"
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={loading ? 'loading' : ''}
        >
          <span>𝕏</span>
          <span>Tweet</span>
        </a>
        <button
          id="new-quote"
          onClick={fetchQuote}
          className={loading ? 'loading' : ''}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteMachine;
