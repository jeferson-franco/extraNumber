const solution = require('./extraNumber.js');

test('test 1', () => {
    expect(solution(2, 7, 2)).toBe(7);
});

test('test 2', () => {
    expect(solution(3, 2, 2)).toBe(3);
});

test('test 3', () => {
    expect(solution(5, 5, 1)).toBe(1);
});

test('test 4', () => {
    expect(solution(500000000, 3, 500000000)).toBe(3);
});

test('test 5', () => {
    expect(solution(1, 5, 1)).toBe(5);
});

test('test 6', () => {
    expect(solution(5, 5, 3)).toBe(3);
});

test('test 7', () => {
    expect(solution(5, 1, 1)).toBe(5);
});

test('test 8', () => {
    expect(solution(4000000, 3000000, 4000000)).toBe(3000000);
});

test('test 9', () => {
    expect(solution(548442737, 82231042, 548442737)).toBe(82231042);
});

test('test 10', () => {
    expect(solution(469992838, 66019520, 66019520)).toBe(469992838);
});
