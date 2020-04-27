"use strict";
// // boolean
// let flag: boolean = true
// // number
// let num: number = 0
// // string
// let str: string = 'wutong'
// // array
// let arr_1: number[] = [1, 2]
// let arr_2: Array<string> = ['1', '2']
// // tuple
// let tuple: [number, string] = [0, 'str']
// // enum
// enum Enum {
//   success = 1,
//   error = -1
// }
// enum Color {
//   red, bule, orange
// }
// let c: Color = Color.red
// let success: Enum = Enum.success
// // any
// // null undefined
// // void
// let run = (): number => {
//   return 123
// }
// never
// 从不会出现的值 包括（ null undefined）的子类型
// let naver:never
// naver=(()=>{throw new Error('error')})()
//定义函数
// let getUserInfo=(name:string,age:number):string=>{
//   return `${name}-----${age}`
// }
//可选参数 配置到参数的最后面
// let getUserInfo=(name:string,age?:number):string=>{
//   return `${name}-----${age??16}`
// }
//默认参数
// let getUserInfo=(name:string,age:number=16):string=>{
//   return `${name}-----${age}`
// }
//剩余参数
// let sum = (...args: number[]): number => {
//   let sum = 0
//   for (let v of args) {
//     sum += v
//   }
//   return sum
// }
// // 函数重载
// function getInfo(name: string): string
// function getInfo(age: number): number
// function getInfo(str: any): any {
//   if (typeof str === 'string') {
//     return 'string'
//   } else if (typeof str === 'number') {
//     return '数字' + 112233
//   }
// }
// class
// class M{
//   public a=1
//   private b=2
//   static a(){
//     console.log(1)
//   }
// }
/**
 * public 共有 默认
 * pritected 保护 类，子类可以访问，类外部无法访问
 * private 私有 子类 类外部不可访问
 */
// class P{
//   constructor(name:string,age?:number){
//     this.name=name
//     this.age=age||20
//   }
//   name:string //省略了 public
//   age:number
//   getName():string{
//     return this.name
//   }
//   setName(name:string):void{
//     this.name=name
//   }
//   run():void{
//     console.log(this.getName()+'run')
//   }
// }
// // new P('wutong').run()
// class _P extends P {
//   run():void{
//     console.log(this.getName()+'run123')
//   }
// }
// new _P('wutong').run()
// 抽象类 -> 定义标准
// abstract class Animal {
//   abstract eat(): void
// }
// class Dog extends Animal {
//   eat(): void {//必须实现抽象方法
//     console.log('eat')
//   }
// }
// new Dog().eat()
// let any: any = 'any'
// any = ['any change']
// let oBox: HTMLElement | null = document.getElementById('app')
// oBox?.style?.color !== (null || undefined) ? oBox.style.color = 'red' : null
// // -----------------------
// let getNumSync = () => new Promise((resolve: (value?: unknown) => void, reject: (value?: unknown) => void) => {
//   setTimeout(() => {
//     resolve(8092)
//   }, 1000)
// })
// let func = async () => {
//   console.log(await getNumSync())
//   console.log(flag, num, str, arr_1, arr_2, tuple, c, success, any, sum(1, 2, 3, 4))
// }
// func()
// 接口 interface
// interface Person{
//   name:string,
//   age?:number
// }
// function p(obj:Person){
//   console.log(obj.name+(obj.age??20))
// }
// p({name:'wutong'})
//函数类型接口
// interface encrypt{
//   (key:string,value:string):string;
// }
// let md5:encrypt=(key:string,value:string)=>{
//   return 'str'
// }
// console.log(md5('2','3'))
//可索引接口  -> 数组对象 不常用
//数组
// interface Arr{
//   [index:number]:number
// }
// let arr:Arr=[1,3]
// //对象
// interface Obj{
//   [index:string]:string
// }
// let obj:Obj={
//   name:'wutong'
// }
// //类  -> 和抽象类非常相似
// interface Animal{
//   name:string;
//   eat(str:string):void;
// }
// class Dog implements Animal{
//   name:string='wutong'
//   eat(str:string){
//     console.log(this.name+str)
//   }
// }
//接口扩展
// interface Animal{
//   eat():void
// }
// interface Per extends Animal{
//   word():void
// }
// class P implements Per{
//   eat(){}
//   word(){}
// }
//泛型 -> 输入输出类型相同
// let func = <T>(value: T): T => {
//   return value
// }
// console.log(func<string>('333'))
//类的泛型
// class F<T>{
//   public list:T[]=[]
//   add(item:T){
//     this.list.push(item)
//   }
//   getZero():T{
//     return this.list[0]
//   }
// }
// 泛型接口
//写法1
// interface Config{
//   <T>(value:T):T
// }
// let func:Config=<T>(value:T):T=>{
//   return value
// }
//写法2
// interface Config<T> {
//   (value: T): T
// }
// let func: Config<string> = <T>(value: T): T => {
//   return value
// }
//类作为类型参数
// class User {
//   public name: string | undefined
//   public age: number | undefined
// }
// let func = (user: User): string => {
//   return (user.name ?? '') + (user.age ?? '')
// }
// let user ={
//   name:'wutong',
//   age:30
// }
// 模块  es6模块：外部模块  命名空间:内部模块
// namespace A{
// }
//装饰器
//普通装饰器
// let logClass=(target:any)=>{
//   // target 就是当前的类
//   console.log(target)
// }
// @logClass
// class H{
//   public name:string|undefined
//   constructor(name:string){
//     this.name=name
//   }
//   getName(){
//     return this.name
//   }
// }
//带参数装饰器
// let logClass=(params:any)=>(target:any)=>{
//   console.log(params)//参数
//   console.log(target)//当前类
// }
// @logClass(1)
// class H{
//   public name:string|undefined
//   constructor(name:string){
//     this.name=name
//   }
//   getName(){
//     return this.name
//   }
// }
// new H('h')
// 装饰器 构造函数重载
// let logClass=(target:any)=>class extends target{
//   name:string='修改后的name'
// }
// @logClass
// class H{
//   public name:string|undefined
//   constructor(name:string){
//     this.name=name
//   }
// }
// console.log(new H('h').name)
// 属性装饰器
// let logProperty=(params:any)=>(target:any,attr:any)=>{
//   console.log(params)
//   console.log(target)
//   console.log(attr)
//   target[attr]=params
// }
// class H{
//   @logProperty('333')
//   public name:string|undefined
//   constructor(){
//   }
//   getName(){
//     return this.name
//   }
// }
// let h=new H()
// console.log(h.getName())
// 方法装饰器
// let logMethod=(params:any)=>(target:any,methodName:any,desc:any)=>{
//   console.log(params)
//   console.log(target)//实例原型 
//   console.log(methodName)
//   console.log(desc)
//   //修改装饰器的方法
//   desc.value=(...args:any[])=>{
//     return '修改后的method'
//   }
// }
// class H{
//   public name:string|undefined
//   constructor(){
//     this.name='wutong'
//   }
//   @logMethod('params')
//   getName(){
//     return this.name
//   }
// }
// console.log(new H().getName())
//方法参数装饰器
// let logParams=(params:any)=>(target:any,methodName:any,paramsIndex:any)=>{
//   console.log(params)
//   console.log(target) // 类的原型对象
//   console.log(methodName)
//   console.log(paramsIndex) //参数列表的索引
// }
// class H{
//   public name:string|undefined
//   constructor(){
//     this.name='wutong'
//   }
//   getName(@logParams('params') id:any){
//     return this.name
//   }
// }
// new H().getName('3')
// 顺序：属性-> 方法 -> 方法参数 -> 类
