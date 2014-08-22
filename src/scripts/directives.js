app.directive("backwardable", function() {
	return {
		link: function(scope, element, attrs) {

			var canGoBackward = function(value) {
				return value > 0;
			};

			element.bind("mouseenter", function() {
				if (canGoBackward(scope.current))
					element.addClass("backwardShown");
			});

			element.bind("mouseleave", function() {
				element.removeClass("backwardShown");
			});

			element.bind("click", function() {
				if (canGoBackward(scope.current)) {
					scope.current--;
					scope.$apply(attrs.click);
					if (!canGoBackward(scope.current))
						element.removeClass("backwardShown")
				}
			});
		}
	}
});

app.directive("forwardable", function() {
	return {
		link: function(scope, element, attrs) {

			var list = scope[attrs.elements];
		
			var canGoForward = function(value, list) {
				return value < list.length - 1
					//&& list[value].done;
			};

			element.bind("mouseenter", function() {
				if (canGoForward(scope.current, list))
					element.addClass("forwardShown");
			});

			element.bind("mouseleave", function() {
				element.removeClass("forwardShown");
			});

			element.bind("click", function() {
				
				if (canGoForward(scope.current, list)) {
					scope.current++;
					scope.$apply(attrs.click);
					if (!canGoForward(scope.current, list))
						element.removeClass("forwardShown");
				}
			});
		}
	}
});
