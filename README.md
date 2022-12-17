# StockTrackingSystemNodeJs
This is a backend application for a stock market tracking system where user’s can trade stocks or shares written in node.js

_Note: this is currently unfinished. The only testable code is login/logout_

### TASKS TO SOLVE
* Your system should have support for users to login/logout.
  * Can use a passport local authorization
* Users should be able to add balance to their wallet.
  * Balance should be stored in the user schema
* Users should be able to buy/sell shares (transactions need not be stored)
  * Stocks should be a collection with shares bought for each stock.
* Users should be able to subscribe to an endpoint that should provide live rates.
  * If using a socket we could have a pre-save hook on the Stock Schema that emits a socket message to the client.
  * if using polling we could have a route that accepts a stock id or symbol which will return the live rate
* Users should have the ability to see their portfolio
  * A Share should be its own Schema and sub-document within a Stock.
  * This way the portfolio is just querying the database for all Shares with the users unique id attached to them

## Test Credentials
<pre><code>
 - Username: User1234
 - Password: Pass1234
</code></pre>

## Run Code
<pre><code>
- make sure .env file is included - 
npm install
npm start
</code></pre>


## Test Code
<pre><code>
- make sure .env file is included - 
npm install
npm test
</code></pre>

## End to End Testing
this was done in postman. 
collection to import can be found in ./postman directory


## Commit Convention
<pre><code>RD-77 feat: add hat wobble
^--^  ^--^  ^------------^
|     |     |
|     |     +-&gt; Summary in present tense.
|     |
|     +-------&gt; Type: chore, docs, feat, fix, refactor, style, or test.
|
+------------&gt; The issue id displayed in Jira
</code></pre>
More examples:
<ul>
<li><code>feat</code>: (new feature for the user, not a new feature for build script)</li>
<li><code>fix</code>: (bug fix for the user, not a fix to a build script)</li>
<li><code>docs</code>: (changes to the documentation)</li>
<li><code>style</code>: (formatting, missing semi colons, etc; no production code change)</li>
<li><code>refactor</code>: (refactoring production code, eg. renaming a variable)</li>
<li><code>test</code>: (adding missing tests, refactoring tests; no production code change)</li>
<li><code>chore</code>: (updating grunt tasks etc; no production code change)</li>
</ul>
Outlined: https://guides.github.com/features/mastering-markdown/
