import i18n from '../plugins/i18n';

export default class ErrorResolver {
  static resolveErrorMessage(error) {
    const translationsPath = 'errors.';

    let result = i18n.t(`${translationsPath}${error?.errorCode}`, error?.payload || {});

    if (result.includes(translationsPath)) {
      result = error?.message || i18n.t(`${translationsPath}DEFAULT`);
    }

    return result;
  }

  static resolve(originError) {
    const firstError = originError.response?.data?.errors[0] || null;

    const handledError = {
      originError,
      errorCode: firstError?.errorCode,
      allErrors: originError.response?.data?.errors || [],
      resolvedErrorMessage: this.resolveErrorMessage(firstError),
    };
    return handledError;
  }
}
