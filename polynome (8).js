//Megane Dandurand
/*Exercice noté #8
Vous devez représenter des polynômes de degré 2 (a x^2 + bx + c, avec a non nul) à l'aide d'une classe. Si le discriminant
d'un polynôme (d = b^2 - 4ac) est strictement positif, il possède deux racines ( (-b +- sqrt(d))/ 2a). S'il est nul, il possède
une seule racine (-b / 2a). S'il est négatif, le polynôme ne possède pas de racine. La somme de deux polynômes de degré 2 est
un polynôme de degré (au plus) 2.
Votre classe doit offrir un mécanisme permettant de trouver les racines d'un polynôme, doit permettre un affichage "naturel"
d'un polynôme et doit offrir l'addition et la soustraction. Vous pouvez ajouter tout autre service que vous jugerez utile.
Écrivez votre classe dans un fichier polynome.js qui contiendra un ou plusieurs tests unitaires mettant en oeuvre chacun des
aspects de votre classe.*/
//Etats: a(non nul),b et c
//Services: getDiscriminant, getRacines,getPoly, add, sub.
load("tools.js");  // pour alea
var Polynome = function(a,b,c){//Polynome constructeur
    if ((a === undefined) && ((b === undefined) || (c === undefined))) {
	a = alea(1,11); // [1,10]
	b = alea(1,11);
    c = alea(1,11);    
    }
    else if (a === undefined) {
	a = 1;
    }
    else if (a === 0) {
	    print ("a is null -> je le mets a 1 puisque l'on veut un a non-nul");
	    a = 1;
	}
    // le cas general:
    this.a = a;
    this.b = b;
    this.c = c;
};
Polynome.prototype.getDiscriminant = function(){//retourne le discriminant d=b^2-4ac
 return (this.b^2)-(4*this.a*this.c);
};
Polynome.prototype.getRacines = function(){//retourne la(les) racine(s) du polynome
    if(this.getDiscriminant > 0){//si discriminant strictement positif, 2 racines:( (-b +- sqrt(d))/ 2a)
        return ("racine 1: " +((-1*this.b)+(Math.sqrt(this.getDiscriminant))/(2*this.a))+" racine 2: "+((-1*this.b)-(Math.sqrt(this.getDiscriminant))/(2*this.a)));
    }
    else if(this.getDiscriminant == 0){//si d est nul, une seule racine: (-b / 2a)
        return (-1*this.b)/(2*this.a);
    }
    else{//si d est negatif: 0 racine
        return "Le polynome ne possede pas de racine";
    }
};
Polynome.prototype.getPoly = function(){//donne polynome 
    return "Le polynome est: "+this.a+"x^2+"+this.b+"x+"+this.c;
};
Polynome.prototype.add = function(that){//add polynome this et that
 return new Polynome((this.a+that.a),(this.b+that.b),(this.c+that.c));
};
Polynome.prototype.sub = function(that){//add polynome this et that
 return new Polynome((this.a-that.a),(this.b-that.b),(this.c-that.c));
};

//TESTS UNITAIRES
var test1 = function(){//test1
var poly1 = new Polynome(2,3,4);
var poly2 = new Polynome(1,1,2);
print(poly1);//print poly1
print(poly2);//print poly2
var get_poly = poly1.getPoly();
print(get_poly);//imprime le poly1
var get_poly = poly2.getPoly();
print(get_poly);//imprime le poly2
var p_add = poly1.add(poly2);//print somme
print(p_add);
var p_sub = poly1.sub(poly2);//print soustraction
print(p_sub);
    
};
test1();//faire test1