class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something not happening right",
    errors = [],
    stack = "",
    errorCode = "UNKNOWN_ERROR",
    metadata = {}
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    this.errorCode = errorCode;
    this.metadata = metadata;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  logError() {
    console.error({
      statusCode: this.statusCode,
      message: this.message,
      errorCode: this.errorCode,
      errors: this.errors,
      metadata: this.metadata,
      stack: this.stack,
    });
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      success: this.success,
      errors: this.errors,
      errorCode: this.errorCode,
      metadata: this.metadata,
    };
  }
}
