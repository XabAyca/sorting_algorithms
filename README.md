[!imae](image.jpeg)
# Project : Sorting Algorithms
1. Introduction
Des fois, un développeur est amené à manipuler des tableaux avec énormément de data à l'intérieur. Pour gagner du temps de traitement par la suite, il est beaucoup plus confortable de travailler avec des tableaux triés par ordre croissant.   

C'est pourquoi aujourd'hui et demain, tu vas implémenter des algorithmes de tri connus, et calculer leur complexité algorithmique, pour savoir s'ils sont plus ou moins efficaces et coûteux en ressource.   

Il existe de nombreux facteurs qui peuvent être pris en compte pour tester l'efficacité d'un algorithme (déclaration de variables, appels système...). Mais dans ce projet, pour rester assez simple, ce sera seulement le nombre de comparaisons entre 2 éléments qui sera pris en compte. Car, pour qu'un algorithme de tri soit efficace, on lui demande d'effectuer le moins de comparaisons possible entre ses différents éléments à trier.

2. Project
D'abord, il faut que ton programme soit capable de gérer une liste qu'on peut moduler facilement. C'est-à-dire qu'elle devra être donnée en argument au programme.   

Afin de rendre le programme le plus modulable possible, il faudra qu'il puisse lire un fichier en paramètre et utiliser les nombres qui sont à l'intérieur :   

Exemple de contenu du fichier list.txt :   

48 -2 6 12 0 -4   
Il faudra donc lancer ton programme de la manière suivante :   

$ node monProgramme.js list.txt   
⚠️ Attention à bien gérer les différents cas d'erreurs dans les arguments. Par exemple un fichier qui n'existe pas, un fichier vide, un mot au lieu d'un nombre... Dans ce cas, tu devras console.error() l'erreur pour en informer l'utilisateur.   

Voici les différents algorithmes de tri à implémenter :   

Tri à bulles. Tu pourras trouver une explication du tri à bulles par Mosh Hamedani ici (les 4 premières minutes)   
Tri par insertion. Tu pourras trouver une explication du par insertion par Mosh Hamedani ici (les 5 premières minutes) ou par Harsha Suryanarayana, ici   
Tri par sélection. Tu pourras trouver une explication du par sélection par Michael Sambol ici ou par Harsha Suryanarayana, ici   
Tri rapide (quicksort). Tu pourras trouver une explication du par sélection par YK Sugishita ici ou par Harsha Suryanarayana, ici   
Attention, ici on prendra le premier nombre du tableau comme pivot
Essaie d'en faire un maximum, et assure-toi bien de tester chaque tri avec différentes configurations de tableaux (par exemple avec un tableau déjà trié) et d'afficher ton tableau pour voir s'il est bien trié à la fin.   

⚠️ Le tri rapide devra utiliser la récursivité et devrait te faire chauffer les méninges 🤯🤯🤯 Pas la peine d'annuler ta reconversion si tu n'y arrives pas du premier coup ;)   

3. Rendu attendu   
Un fichier qui affiche en sortie dans la console le nombre de comparaisons pour les différents algos de tri implémentés. Tu trouveras quelques exemples ci-dessous.   

Je te conseille d'utiliser une class, c'est plus pratique d'avoir des attributs pour pouvoir compter le nombre de comparaisons.   

⚠️ Il se peut que le nombre de comparaisons de ton programme ne soit pas exactement le même que celui de l'exemple. Ce n'est pas grave, l'important c'est que ton tableau soit bien trié avec le bon algo, essaie tout de même d'avoir un nombre de comparaisons cohérent.   
# Author
[AYCAGUER Xabi](https://www.linkedin.com/in/xabi-aycaguer/)