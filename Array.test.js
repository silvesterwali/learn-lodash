const _ = require("lodash");
describe("Test lodash Array", () => {
  /**
   * _.chunk(array, [size=1])
   *
   * Creates an array of elements split into groups the length of size.
   * If array can't be split evenly, the final chunk will be the remaining elements.
   *
   */
  it("chunk 1", () => {
    expect(_.chunk(["a", "b", "c", "d"], 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("chunk 2", () => {
    expect(_.chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
  });

  /**
   * _.compact(array)
   *
   * Creates an array with all falsey values removed.
   *  The values false, null, 0, "", undefined, and NaN are falsey.
   */

  it("compact", () => {
    expect(_.compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
  });

  /**
   * _.concat(array, [values])
   *
   * Creates a new array concatenating array with any additional arrays and/or values.
   */

  it("concat", () => {
    var array = [1];
    expect(_.concat(array, 1, 3, 4, [5])).toEqual([1, 1, 3, 4, 5]);
  });

  /**
   * _.difference(array, [values])
   *
   * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
   * The order and references of result values are determined by the first array.
   */

  it("difference", () => {
    expect(_.difference([1, 2], [2, 3])).toEqual([1]);
  });

  /**
   * _.differenceBy(array, [values], [iteratee=_.identity])
   *
   * This method is like _.difference except that it accepts iteratee
   * which is invoked for each element of array
   * and values to generate the criterion by which they're compared.
   * The order and references of result values are determined by the first array.
   * The iteratee is invoked with one argument:
   */

  it("differenceBy", () => {
    const peoples = [
      {
        id: 1,
        name: "silvester",
      },
      {
        id: 2,
        name: "robby",
      },
      {
        id: 3,
        name: "rama",
      },
    ];

    const selectedPeoples = [
      {
        id: 1,
        name: "silvester",
      },
      {
        id: 3,
        name: "rama",
      },
    ];

    const resultExpected = [
      {
        id: 2,
        name: "robby",
      },
    ];

    expect(_.differenceBy(peoples, selectedPeoples, "id")).toEqual(
      resultExpected
    );
  });

  /**
   * _.differenceWith(array, [values], [comparator])
   *
   * This method is like _.difference except that it accepts comparator
   * which is invoked to compare elements of array to values.
   * The order and references of result values are determined by the first array.
   * The comparator is invoked with two arguments: (arrVal, othVal).
   */

  it("differentWith", () => {
    const peoples = [
      {
        id: 1,
        name: "silvester",
      },
      {
        id: 2,
        name: "robby",
      },
      {
        id: 3,
        name: "rama",
      },
    ];

    const selectedPeoples = [
      {
        id: 1,
        name: "silvester",
      },
      {
        id: 3,
        name: "rama",
      },
    ];

    const resultExpected = [
      {
        id: 2,
        name: "robby",
      },
    ];

    expect(_.differenceWith(peoples, selectedPeoples, _.isEqual)).toEqual(
      resultExpected
    );
  });

  /**
   * _.drop(array, [n=1])
   *
   * Creates a slice of array with n elements dropped from the beginning.
   */

  it("drop 1", () => {
    /**
     * [n=1] = 1 by default
     */
    expect(_.drop([1, 2, 3])).toEqual([2, 3]);
  });

  it("drop 2", () => {
    /**
     * drop count from 1 not from 0 index
     */
    expect(_.drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it("drop 3", () => {
    /**
     * drop will delete all element even the element less then (n) argument
     */
    expect(_.drop([1, 2, 3], 5)).toEqual([]);
  });

  it("drop 4", () => {
    /**
     * drop will delete all the element until equal to (n) argument
     */
    expect(_.drop([1, 2, 3], 2)).toEqual([3]);
  });

  /**
   * _.dropRight(array, [n=1])
   *
   * Creates a slice of array with n elements dropped from the end.
   */

  it("dropRight 1", () => {
    /**
     * drop right will be delete the from 1 until equal to (n) argument.
     * by default the (n) argument is 1
     */
    expect(_.dropRight([1, 2, 3])).toEqual([1, 2]);
  });

  it("dropRight2", () => {
    const peoples = [
      {
        id: 1,
        name: "silvester",
      },
      {
        id: 2,
        name: "robby",
      },
      {
        id: 3,
        name: "rama",
      },
    ];

    const unRemovePeoples = [
      {
        id: 1,
        name: "silvester",
      },
    ];

    expect(_.dropRight(peoples, 2)).toEqual(unRemovePeoples);
  });

  it("dropRight 3", () => {
    const peoples = [
      {
        id: 1,
        name: "silvester",
      },
      {
        id: 2,
        name: "robby",
      },
      {
        id: 3,
        name: "rama",
      },
    ];
    /**
     * will remove all element from array because
     * the (n) argument is greater then length of array
     *
     */
    expect(_.dropRight(peoples, 5)).toEqual([]);
  });

  it("dropRight 4", () => {
    const peoples = [
      {
        id: 1,
        name: "silvester",
      },
      {
        id: 2,
        name: "robby",
      },
      {
        id: 3,
        name: "rama",
      },
    ];
    /**
     * in this case the array `peoples` are not see by the index as usually
     * do in array behavior.
     */
    expect(_.dropRight(peoples, 0)).toEqual(peoples);
  });

  /**
   * _.dropRightWhile(array, [predicate=_.identity])
   *
   * Creates a slice of array excluding elements dropped from the end.
   * Elements are dropped until predicate returns falsey.
   * The predicate is invoked with three arguments: (value, index, array).
   */

  it("dropRightWhile 1", () => {
    const products = [
      {
        id: 1,
        name: "Apple",
        price: 4500,
      },
      {
        id: 2,
        name: "mango",
        price: 4300,
      },
      {
        id: 3,
        name: "Avocado",
        price: 5000,
      },
      {
        id: 4,
        name: "Pin Apple",
        price: 5000,
      },
      {
        id: 5,
        name: "Start Fruit",
        price: 5000,
      },
    ];

    const expectedLowerPriceProduct = [
      {
        id: 1,
        name: "Apple",
        price: 4500,
      },
      {
        id: 2,
        name: "mango",
        price: 4300,
      },
    ];

    expect(
      _.dropRightWhile(products, function (product) {
        return product.price > 4300;
        // equal to:
        //  return product.price >= 4500;
      })
    ).toEqual(expectedLowerPriceProduct);
  });

  it("dropRightWhile 2", () => {
    const products = [
      {
        id: 1,
        name: "Apple",
        price: 4500,
      },
      {
        id: 2,
        name: "mango",
        price: 4300,
      },
      {
        id: 3,
        name: "Avocado",
        price: 5000,
      },
      {
        id: 4,
        name: "Pin Apple",
        price: 5000,
      },
      {
        id: 5,
        name: "Start Fruit",
        price: 5000,
      },
    ];

    const expectedLowerPriceProduct = [
      {
        id: 1,
        name: "Apple",
        price: 4500,
      },
      {
        id: 2,
        name: "mango",
        price: 4300,
      },
    ];

    expect(_.dropRightWhile(products, { price: 5000 })).toEqual(
      expectedLowerPriceProduct
    );
  });

  /**
   * _.dropWhile(array, [predicate=_.identity])
   *
   * Creates a slice of array excluding elements dropped from the beginning.
   * Elements are dropped until predicate returns falsey.
   * The predicate is invoked with three arguments: (value, index, array).
   */

  it("dropWhile 1", () => {
    const peoples = [
      {
        id: 1,
        name: "silvester",
        active: false,
      },
      {
        id: 2,
        name: "robby",
        active: true,
      },
      {
        id: 3,
        name: "rama",
        active: false,
      },
    ];

    const activeUsers = [
      {
        id: 2,
        name: "robby",
        active: true,
      },
      {
        id: 3,
        name: "rama",
        active: false,
      },
    ];

    /**
     * Only the first element of array peoples will drop
     *
     */
    expect(_.dropWhile(peoples, (people) => !people.active)).toEqual(
      activeUsers
    );
  });

  it("dropWhile 2", () => {
    const peoples = [
      {
        id: 1,
        name: "silvester",
        active: false,
      },
      {
        id: 2,
        name: "robby",
        active: true,
      },
      {
        id: 3,
        name: "rama",
        active: false,
      },
    ];

    const expectedPeople = [
      {
        id: 2,
        name: "robby",
        active: true,
      },
      {
        id: 3,
        name: "rama",
        active: false,
      },
    ];
    expect(_.dropWhile(peoples, { name: "silvester", active: false })).toEqual(
      expectedPeople
    );
  });

  it("dropWhile 3", () => {
    const peoples = [
      {
        id: 1,
        name: "silvester",
        active: false,
      },
      {
        id: 2,
        name: "robby",
        active: true,
      },
      {
        id: 3,
        name: "rama",
        active: false,
      },
    ];

    const expectedPeople = [
      {
        id: 2,
        name: "robby",
        active: true,
      },
      {
        id: 3,
        name: "rama",
        active: false,
      },
    ];
    /**
     * short hand of eliminate element to drop from array
     */
    expect(_.dropWhile(peoples, ["active", false])).toEqual(expectedPeople);
  });
});
