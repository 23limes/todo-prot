describe('TodoMVC homepage', function() {

	var todoInput = element(by.model('newTodo'));
	var countLabel = element(by.binding('remainingCount'));
	//you can use this since there are multiple 'remainingCount' bindings on the page
	var countLabel2 = element(by.css('#todo-count strong')); 
	var todoCompletes = element.all(by.model('todo.completed'));
	var firstTodo = element(by.repeater('todo in todos').row(0));
	var removeButtons = element.all(by.css('[ng-click="removeTodo(todo)"]'));
	var completedFilter = element(by.css('[href="#/completed"]'));
	var activeFilter = element(by.css('[href="#/active"]'));

	beforeEach(function(){
    browser.get('http://localhost:9000/index.html#/');
  });

  afterEach(function(){
  	browser.driver.sleep(1000);
  });


  it('should add one item', function() {
  	todoInput.sendKeys('My first item', protractor.Key.ENTER).then(function(){
	  	var todoTitle = element(by.repeater('todo in todos').row(0).column('{{todo.title}}')).getText();
	  	expect(todoTitle).toEqual('My first item');

	  	//remove our test item
	  	todoCompletes.get(0).click();
	    firstTodo.element(by.css('button')).click();
	  });

 	}, 12000);

/*
  it('should add one item then complete it', function() {

    todoInput.sendKeys('My first item', protractor.Key.ENTER);
    expect(countLabel2.getText()).toEqual('1');
    todoCompletes.get(0).click();
    expect(countLabel2.getText()).toEqual('0');

    //remove our test item
    firstTodo.element(by.css('button')).click();

  }, 12000);
*/


/*
  //run the rest as a group

  it('should add two items', function() {
    todoInput.sendKeys('My first item', protractor.Key.ENTER).then(function(){
	    todoInput.sendKeys('My second item', protractor.Key.ENTER).then(function(){
	    	expect(countLabel2.getText()).toEqual('2');
	  	});
    });
  }, 12000);


  it('should hide incompleted items', function(){
  	completedFilter.click().then(function(){
  		expect(firstTodo).toBe(null);
  	});
  }, 12000);


  it('should show incompleted items', function(){
  	activeFilter.click().then(function(){
  		firstTodo.isDisplayed().then(function(isVisible){
        expect(isVisible).toBe(true);
      });
  	});
  }, 12000);
  

  it('should remove two items', function() {
    todoCompletes.get(0).click();
	  firstTodo.element(by.css('button')).click();
	  expect(countLabel2.getText()).toEqual('1');

	  todoCompletes.get(0).click();
	  firstTodo.element(by.css('button')).click();
	  expect(countLabel2.getText()).toEqual('');
  }, 12000);
*/
  

});