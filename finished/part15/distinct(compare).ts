import { from, zip, interval, distinct } from 'rxjs';

// 传入一个selector callback function,这个callback function会传入一个接收到的元素,并且传给我们真正希望比对的值

zip(
  from([
    { value: 'a' },
    { value: 'b' },
    { value: 'c' },
    { value: 'a' },
    { value: 'c' },
  ]),
  interval(300),
  (x, y) => x
)
  .pipe(
    distinct((x) => {
      return x.value;
    })
  )
  .subscribe({
    next: function (value) {
      console.log(value);
    },
  }
  );
// 输出
// {value: "a"}
// {value: "b"}
// {value: "c"}
// 此处可以看出observable输出的是对象,