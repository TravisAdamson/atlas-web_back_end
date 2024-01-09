export default function createInt8TypedArray(length, position, value) {
  const aBuffer = new ArrayBuffer(length);
  const dView = new DataView(aBuffer, 0, length);

  if (position >= length) {
    throw Error('Position outside range');
  }
  dView.setInt8(position, value);
  return dView;
}
