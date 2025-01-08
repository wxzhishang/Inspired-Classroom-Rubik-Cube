import pontConfig from '../../pont-config.json';
/**
 * 后端code检查 0=成功 2=异步
 * @param result
 * @returns
 */
export const checkResult = (result: StoreValue) => ['0', '2'].includes(`${result.code}`);

export default () => {
  const result: NormalObject = {};
  // const mockDatasources: string[] = pontConfig.mocks.containDataSources;
  pontConfig.origins.forEach(origin => {
    const { name } = origin;
    result[name] = `${window.location.origin}/${name}`;
  });
  return result;
};
