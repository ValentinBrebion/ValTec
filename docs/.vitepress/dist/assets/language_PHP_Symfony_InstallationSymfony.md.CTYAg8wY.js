import{_ as n,c as t,j as s,a,I as p,a4 as i,o as l,D as r}from"./chunks/framework.Cp3ltd4t.js";const E=JSON.parse(`{"title":"Installation d'un projet Symfony","description":"","frontmatter":{"next":{"text":"Hiérarchie de Symfony","link":"language/PHP/Symfony/HierarchieSymfony"},"prev":{"text":"Histoire de Symfony","link":"language/PHP/Symfony/HistoireSymfony"}},"headers":[],"relativePath":"language/PHP/Symfony/InstallationSymfony.md","filePath":"language/PHP/Symfony/InstallationSymfony.md","lastUpdated":1722175062000}`),o={name:"language/PHP/Symfony/InstallationSymfony.md"},h=i(`<h1 id="installation-d-un-projet-symfony" tabindex="-1">Installation d&#39;un projet Symfony <a class="header-anchor" href="#installation-d-un-projet-symfony" aria-label="Permalink to &quot;Installation d&#39;un projet Symfony&quot;">​</a></h1><p>C&#39;est bien beau d&#39;apprendre l&#39;histoire de Symfony mais comment on créer un projet ? et bien t&#39;a deux solutions soit tu vas <a href="https://symfony.com/doc/current/setup.html#creating-symfony-applications" target="_blank" rel="noreferrer">voir la doc</a> soit tu es un giga beau gosse et tu suis mon tutoriel...</p><h2 id="creation-d-un-projet-symfony" tabindex="-1">Création d&#39;un projet Symfony <a class="header-anchor" href="#creation-d-un-projet-symfony" aria-label="Permalink to &quot;Création d&#39;un projet Symfony&quot;">​</a></h2><p>Si tu as suivi les étapes d&#39;avant normalement tu devrais être apte à créer et utiliser un projet Symfony.</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">composer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">project</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symfony</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">skeleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;7.0.*&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> my_project_directory</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>vous constaterez que vous n&#39;avez pas grand chose mais c&#39;est ce <code>pas grand chose</code> qui fait tout 😉 mais nous on veut s&#39;amuser alors passons à la suite !</p><h2 id="ajout-des-composants-supplementaires" tabindex="-1">Ajout des composants supplémentaires <a class="header-anchor" href="#ajout-des-composants-supplementaires" aria-label="Permalink to &quot;Ajout des composants supplémentaires&quot;">​</a></h2><p>C&#39;est bien beau mais peut-on customiser notre projet ? la réponse est oui ! Vous pouvez installer des composants supplémentaires à votre projet :</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">composer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> require</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dev</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> profiler</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> maker</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// et</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">composer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> require</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> twig</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> form</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> validator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> orm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,9),d={id:"moteur-de-rendu-twig",tabindex:"-1"},k={target:"_blank",href:"https://twig.symfony.com/"},c=s("a",{class:"header-anchor",href:"#moteur-de-rendu-twig","aria-label":'Permalink to "Moteur de rendu : Twig <a target="_blank" href="https://twig.symfony.com/"><Badge type="tip" text="Documentation" /></a>"'},"​",-1),u=i(`<p>Une fois que vous avez éxecuté la commande <code>composer require twig</code>, un dossier &quot;template&quot; apparaitra dans votre projet et vous pourrez mettre en forme vos données.</p><h3 id="la-syntaxe" tabindex="-1">La syntaxe : <a class="header-anchor" href="#la-syntaxe" aria-label="Permalink to &quot;La syntaxe :&quot;">​</a></h3><p>Faire un appel variable :</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*Appel et affichage d&#39;une variable*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Commentaires :</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{# </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*Commentaires*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Rendu conditionnel</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> condition </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //code à exécuté dans la condition</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> endif </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,8);function m(y,g,b,v,f,C){const e=r("Badge");return l(),t("div",null,[h,s("h2",d,[a("Moteur de rendu : Twig "),s("a",k,[p(e,{type:"tip",text:"Documentation"})]),a(),c]),u])}const F=n(o,[["render",m]]);export{E as __pageData,F as default};