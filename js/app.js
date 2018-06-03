/*
** オブジェクト指向について
** ソフトウェアを開発するときに用いる部品化の考え方のこと
**
**
**
**
**
**
*/


class Human {

	// コンストラクタ
	constructor(name){
		this._name = name;
	}

	//メソッド
	greet(){
		console.log('Hello, my name is ' + this._name + '!!');
	}

	sleep(){
		console.log('Zzz...');
	}

	// スタティックメソッド
	static greet() {
		console.log('I am a human!');
	}
};

// 疎結合が良しとされる中、密結合となる継承はあまり使わないほうがいい。
class Ultraman extends Human{
	constructor(name, limitMin){
		super(name);
		this.limitMin = limitMin;
		this._skills = [];
	}

	// オーバーライド
	sleep(){
		console.log('I will never sleep!!');
	}

	lose(){
		console.log('Timelimit is ' + this.limitMin + 'minutes... I lost.');
	}

	fly(){
		console.log('fly!!');
	}

	get name() {
	  	return this._name;
	}

	set name(name) {
		this._name = name;
	}

	// カプセル化
	add(skill) {
		this.skills.push(skill);
	}

	get skills() {
		return this._skills;
	}

}


const nobita = new Human('nobita');
Human.greet();
nobita.greet();
nobita.sleep();

const taro = new Ultraman('taro', 3);
taro.greet();
taro.sleep();
taro.fly();
taro.lose();
console.log(taro.name);
taro.name ='ichiro';
console.log(taro.name);
console.log(taro.skills);
taro.add('swim');
taro.add('kick');
console.log(taro.skills);
