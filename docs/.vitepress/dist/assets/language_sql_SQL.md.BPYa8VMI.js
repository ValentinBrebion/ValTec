import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.Cp3ltd4t.js";const u=JSON.parse('{"title":"Cours SQL","description":"","frontmatter":{"next":{"text":"TypeScript - Intro","link":"language/TypeScript/IntroTypeScript"},"prev":{"text":"Thème Enfant - Wordpress","link":"language/PHP/Wordpress/Childrentheme"}},"headers":[],"relativePath":"language/sql/SQL.md","filePath":"language/sql/SQL.md","lastUpdated":1730654475000}'),n={name:"language/sql/SQL.md"},t=e(`<h1 id="cours-sql" tabindex="-1">Cours SQL <a class="header-anchor" href="#cours-sql" aria-label="Permalink to &quot;Cours SQL&quot;">​</a></h1><p>SQL a été développé dans les années 1970 par IBM pour gérer des bases de données relationnelles, basé sur les travaux d&#39;Edgar F. Codd. Les chercheurs Donald Chamberlin et Raymond Boyce ont initialement nommé ce langage SEQUEL (puis SQL). En 1986, SQL est devenu un standard international avec l&#39;ANSI, puis l&#39;ISO. Depuis, il est le langage principal pour interroger et manipuler des bases de données, utilisé par des systèmes comme MySQL, PostgreSQL et Oracle.</p><h2 id="terminologie" tabindex="-1">Terminologie <a class="header-anchor" href="#terminologie" aria-label="Permalink to &quot;Terminologie&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Vocabulaire</th><th style="text-align:center;">Définition</th></tr></thead><tbody><tr><td>Table</td><td style="text-align:center;">Une collection de données organisée en lignes et colonnes</td></tr><tr><td>Colonne</td><td style="text-align:center;">Un champ unique dans une table qui contient le même type de données</td></tr><tr><td>Ligne</td><td style="text-align:center;">Un enregistrement unique (un tuple) dans une table, une collection de données spécifiques dans chaque colonne</td></tr><tr><td>Clé primaire <code>(PRIMARY KEY)</code></td><td style="text-align:center;">Un identifiant unique pour chaque ligne d&#39;une table.</td></tr><tr><td>Clé étrangère <code>(FOREIGN KEY)</code></td><td style="text-align:center;">Une colonne qui référence la clé primaire d&#39;une autre table pour créer des relations entre les tables.</td></tr></tbody></table><h2 id="avantages-et-limites-du-sql" tabindex="-1">Avantages et Limites du SQL <a class="header-anchor" href="#avantages-et-limites-du-sql" aria-label="Permalink to &quot;Avantages et Limites du SQL&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title"><h4 style="margin:0px;">Avantages ✅</h4></p><ul><li><strong>Standardisé</strong> : Compatible entre divers SGBD</li><li><strong>Flexibles</strong> : Capable de gérer tout type de données</li><li><strong>Performant</strong> : Optimisable pour traiter de grosses volumétries en temps réel</li><li><strong>Universel</strong> : Utilisé dans tous les domaines</li></ul></div><div class="important custom-block github-alert"><p class="custom-block-title"><h4 style="margin:0px;">Limites ❌</h4></p><p></p><ul><li><strong>Apprentissage complexe</strong> : Beaucoup de notion à apprendre</li><li><strong>Optimisation nécessaire</strong> : Nécessité lorsque les volumes deviennent importants</li><li><strong>Relationnel uniquement</strong> : non adapté aux BDD NOSQL</li></ul></div><h2 id="type-de-requetes-sql" tabindex="-1">Type de requêtes SQL <a class="header-anchor" href="#type-de-requetes-sql" aria-label="Permalink to &quot;Type de requêtes SQL&quot;">​</a></h2><p>SQL comprend plusieurs catégories de commandes, chacune servant un objectif spécifique pour manipuler ou gérer les données et la structure de la base de données. Les deux types les plus importants sont :</p><blockquote><h3 id="requetes-de-manipulation-de-donnees-dml-data-manipulation-language" tabindex="-1">Requêtes de Manipulation de Données (DML - Data Manipulation Language) <a class="header-anchor" href="#requetes-de-manipulation-de-donnees-dml-data-manipulation-language" aria-label="Permalink to &quot;Requêtes de Manipulation de Données (DML - Data Manipulation Language)&quot;">​</a></h3></blockquote><p>Les commandes DML permettent <code>d&#39;intéragir avec les données déjà présentes dans la base</code>. Plusieurs commandes sont à disposition :</p><ul><li><code>SELECT</code>: Utilisée pour lire et récupérer des données dans la BDD. Exemple :</li></ul><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nom, age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clients </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pays </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;France&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>INSERT INTO</code>: Permet d&#39;ajouter de noubelles données dans une table. Exemple :</li></ul><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INSERT INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clients (nom, age, pays) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Alice Dupont&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;France&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>UPDATE</code>: Utilisée pour modifier des données existantes dans une table. Exemple :</li></ul><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clients </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 31</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Alice Dupont&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>DELETE</code>: Permet de supprimer des lignes spécifiques d&#39;une table. Exemple :</li></ul><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DELETE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clients </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Alice Dupont&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><h3 id="requetes-de-definition-des-donnees-ddl-data-definition-language" tabindex="-1">Requêtes de Définition des Données (DDL - Data Definition Language) <a class="header-anchor" href="#requetes-de-definition-des-donnees-ddl-data-definition-language" aria-label="Permalink to &quot;Requêtes de Définition des Données (DDL - Data Definition Language)&quot;">​</a></h3></blockquote><p>Les commandes DDL servent à créer et modifier la structure de la base de données elle-même, dont les tables, les vues et d&#39;autres objets</p><ul><li><code>CREATE</code>: Utilisée pour créer une nouvelle table, bdd, index ou autre objet dans la base. Exemple:</li></ul><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> clients</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    client_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pays </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><code>ALTER</code>: Permet de modifier la structure d&#39;un objet existant, comme ajouter ou supprimer une colonne dans une table, changer le type de données d&#39;une colonne ou renommer un objet. Exemple pour ajouter une colonne :</li></ul><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ALTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clients </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> email </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Exemple pour supprimer une colonne :</p><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ALTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clients </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DROP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> COLUMN age;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>DROP</code>: Utilisée pour supprimer un obket de la base de données. La suppression est définitive et toutes les données contenues dans l&#39;objet seront perdues.</li></ul><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DROP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clients;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><h3 id="requetes-de-droits-d-acces-aux-donnees-dcl-data-control-language" tabindex="-1">Requêtes de Droits d&#39;accès aux données (DCL: Data Control Language) <a class="header-anchor" href="#requetes-de-droits-d-acces-aux-donnees-dcl-data-control-language" aria-label="Permalink to &quot;Requêtes de Droits d&#39;accès aux données (DCL: Data Control Language)&quot;">​</a></h3></blockquote><p>Les commandes DCL sont utilisées pour gérer les droits d&#39;accès et permissions sur les objets de la base de données</p><ul><li><code>GRANT</code>: Accorde des permissions spécifiques à un utilisateur ou à un groupe d&#39;utilisateurs. On peut accorder l&#39;accès à des actions comme <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>, etc., sur un objet particulier. Exemple:</li></ul><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GRANT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INSERT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Clients </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utilisateur1;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><em>Ici, l&#39;utilisateur reçoit les permissions de lecture (<code>SELECT</code>) et d&#39;insertion (<code>INSERT</code>) sur la table CLIENTS</em></p><ul><li><code>REVOKE</code>: Révoque les permissions précédemment accordées à un utilisateur ou à un groupe. Cela permet de retirer l&#39;accès à certaines opérations. Exemple:</li></ul><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REVOKE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> INSERT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clients </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utilisateur1;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><em>L&#39;utilisateur perd la permission d&#39;insertion (<code>INSERT</code>) sur la table clients</em></p><blockquote><h3 id="requetes-de-transations-dans-une-base-de-donnees-tcl-transaction-control-language" tabindex="-1">Requêtes de transations dans une base de données (TCL: Transaction Control Language) <a class="header-anchor" href="#requetes-de-transations-dans-une-base-de-donnees-tcl-transaction-control-language" aria-label="Permalink to &quot;Requêtes de transations dans une base de données (TCL: Transaction Control Language)&quot;">​</a></h3></blockquote><br><div class="info custom-block"><p class="custom-block-title">C&#39;est quoi une transaction ? 🤔</p><p>Une transaction en base de données est un ensemble d&#39;opérations SQL (comme <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>) exécutées ensemble pour accomplir une tâche spécifique. Elle est traitée par unité : soit les opérations réussissent, soit elles échouent toutes.</p></div><details class="details custom-block" open=""><summary><strong><u>COMMIT</u></strong></summary><p>Valide les modifications apportées par une transaction dans la base de données de manière permanente. Une fois COMMIT exécuté, les changements sont enregistrés et ne peuvent plus être annulés par un ROLLBACK.</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BEGIN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TRANSACTION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comptes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> solde </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> solde </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id_compte </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comptes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> solde </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> solde </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id_compte </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COMMIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><details class="details custom-block" open=""><summary><strong><u>ROLLBACK</u></strong></summary><p>Annule toutes les modifications effectuées par une transaction en cours si elle n&#39;a pas encore été validée avec COMMIT. Cela permet de revenir à l&#39;état initial en cas d&#39;erreur.</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BEGIN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TRANSACTION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comptes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> solde </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> solde </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id_compte </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comptes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> solde </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> solde </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id_compte </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ROLLBACK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><details class="details custom-block" open=""><summary><strong><u>SAVEPOINT</u></strong></summary><p>Crée un point de sauvegarde intermédiaire dans une transaction, permettant d&#39;annuler seulement une partie des modifications effectuées depuis ce point, sans annuler toute la transaction.</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BEGIN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TRANSACTION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comptes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> solde </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> solde </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id_compte </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SAVEPOINT step1;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comptes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> solde </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> solde </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id_compte </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ROLLBACK</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> step1;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Revenir à l&#39;état au moment du savepoint</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COMMIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><h2 id="relations-entre-tables-jointures" tabindex="-1">Relations entre Tables (Jointures) <a class="header-anchor" href="#relations-entre-tables-jointures" aria-label="Permalink to &quot;Relations entre Tables (Jointures)&quot;">​</a></h2><p>Les jointures permettent de récupérer des données de plusieurs tables liées entre elles.</p><h3 id="jointure-interne-inner-join" tabindex="-1">Jointure Interne (<code>INNER JOIN</code>) <a class="header-anchor" href="#jointure-interne-inner-join" aria-label="Permalink to &quot;Jointure Interne (\`INNER JOIN\`)&quot;">​</a></h3><p>INNER JOIN est un type de jointure qui permet de récupérer uniquement les enregistrements qui ont une correspondance dans les deux tables concernées par la jointure. Supposons que nous ayons une table commandes :</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> commandes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    commande_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    client_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    produit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    montant </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DECIMAL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    FOREIGN KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (client_id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clients(client_id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Pour récupérer les commandes avec les noms des clients :</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> clients</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">commandes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">produit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">commandes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">montant</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clients</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INNER JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> commandes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> clients</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">client_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> commandes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">client_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="jointure-gauche-left-join" tabindex="-1">Jointure Gauche (<code>LEFT JOIN</code>) <a class="header-anchor" href="#jointure-gauche-left-join" aria-label="Permalink to &quot;Jointure Gauche (\`LEFT JOIN\`)&quot;">​</a></h3><p>Le LEFT JOIN est un type de jointure en SQL qui permet de récupérer tous les enregistrements de la table de gauche (dans la requête) et les enregistrements correspondants de la table de droite si une correspondance existe. Si aucune correspondance n&#39;est trouvée dans la table de droite, les colonnes de cette table seront remplies par des valeurs NULL. Supposons que nous ayons une table commandes :</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> commandes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    commande_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    client_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    produit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    montant </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DECIMAL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    FOREIGN KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (client_id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clients(client_id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Dans cet exemple, clients est la table de gauche et commandes est la table de droite. Si nous utilisons un LEFT JOIN, nous obtiendrons toutes les lignes de clients, même celles qui n&#39;ont pas de correspondance dans commandes.</p><p>Requête :</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> clients</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">commandes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">produit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">commandes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">montant</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clients</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LEFT JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> commandes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> clients</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">client_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> commandes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">client_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,56),l=[t];function p(h,r,d,k,o,E){return a(),i("div",null,l)}const g=s(n,[["render",p]]);export{u as __pageData,g as default};