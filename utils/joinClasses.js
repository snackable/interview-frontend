export default function jc(...allNames) {
  return allNames.filter((s) => s).join(' ');
}
